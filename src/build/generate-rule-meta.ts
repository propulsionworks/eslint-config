import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import type { TypeScriptESLintRules } from "@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules";
import { ESLint, Linter, type Rule } from "eslint";
import n from "eslint-plugin-n";
import unicorn from "eslint-plugin-unicorn";
import assert from "node:assert";
import tsConfig from "typescript-eslint";
import {
  loadRuleFile,
  type Configs,
  type FlatConfigMap,
  type RuleMap,
  type RuleMetaDocs,
} from "../ruleset.ts";
import { saveRuleFile } from "./shared.ts";

const scriptArgs = process.argv.slice(2);
const ruleMap = loadRuleFile();
const unloadedRules = new Set<string>(Object.keys(ruleMap));

function lookupCoreRule(name: string): Rule.RuleModule {
  for (const config of ESLint.defaultConfig) {
    const rule = config.plugins?.["@"]?.rules?.[name];
    if (rule) {
      return rule;
    }
  }
  throw new Error(`can't find definition of core rule "${name}"`);
}

function getCoreRules(): Record<string, Rule.RuleModule> {
  return Object.fromEntries(
    Object.keys(js.configs.all.rules).map((name) => [
      name,
      lookupCoreRule(name),
    ]),
  );
}

function initRule(rule: string, docs: RuleMetaDocs) {
  const existing = ruleMap[rule];
  if (existing) {
    existing.docs = docs;
    delete existing.sourceConfigs;

    if (scriptArgs.includes("--clear-configs")) {
      delete existing.rulesets;
    }
  } else {
    ruleMap[rule] = { docs };
  }
  unloadedRules.delete(rule);
}

function setConfig(rule: string, config: string, entry: Linter.RuleEntry) {
  // don't save the rule if it hasn't been loaded already
  const existing = ruleMap[rule];
  if (existing) {
    if (!existing.sourceConfigs) {
      existing.sourceConfigs = {};
    }
    existing.sourceConfigs[config] = entry;
  }
}

function loadRules(
  rules: RuleMap | TypeScriptESLintRules | undefined, // includes undefined for convenience
  plugin?: string,
): void {
  assert(rules, `expected to find rules for ${plugin ?? "core"}`);
  const ruleEntries = Object.entries(rules) as [string, Rule.RuleModule][];

  for (const [baseName, rule] of ruleEntries) {
    const name = plugin ? `${plugin}/${baseName}` : baseName;
    assert(rule.meta?.docs, `expected rule "${name}" to have docs`);
    initRule(name, rule.meta.docs);
  }

  console.log(`Loaded ${ruleEntries.length} rules from ${plugin ?? "core"}`);
}

function loadConfig(configKey: string, config: Configs): void {
  if (Array.isArray(config)) {
    for (const item of config) {
      loadConfig(configKey, item);
    }
    return;
  }
  if (!config.rules) {
    return;
  }

  // remove 'flat/' from rule name because it's an implementation detail
  const configName = (config.name ?? configKey).replace("/flat/", "/");

  for (const [ruleName, ruleConfig] of Object.entries(config.rules)) {
    if (!ruleConfig) {
      continue;
    }
    setConfig(ruleName, configName, ruleConfig);
  }
}

function loadConfigs(configMap: FlatConfigMap, plugin?: string): void;
function loadConfigs<Config>(
  configMap: Config,
  plugin: string | undefined,
  selector: (value: Config, key: string) => boolean,
): void;
function loadConfigs(
  configMap: FlatConfigMap,
  plugin?: string,
  selector?: (value: unknown, key: string) => boolean,
): void {
  for (const [configName, config] of Object.entries(configMap)) {
    if (configName === "all") {
      // this isn't useful data to know that a rule is in an "all" config
      continue;
    }
    if (selector && !selector(config, configName)) {
      continue;
    }
    loadConfig(plugin ? `${plugin}/${configName}` : configName, config);
  }
}

function main(): void {
  loadRules(getCoreRules());
  loadRules(n.rules, "n");
  loadRules(unicorn.rules, "unicorn");
  loadRules(tsPlugin.rules, "@typescript-eslint");

  for (const rule of unloadedRules) {
    console.warn(`rule "${rule}" has been removed`);
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete ruleMap[rule];
  }

  loadConfigs(js.configs);

  // n has flat configs prefixed with "flat/"
  loadConfigs(n.configs, "n", (_, name) => name.startsWith("flat/"));

  // unicorn has flat configs prefixed with "flat/"
  loadConfigs(
    unicorn.configs as FlatConfigMap,
    "unicorn",
    (_, name) => name.startsWith("flat/") && name !== "flat/all",
  );

  loadConfigs(tsConfig.configs, "@typescript-eslint");

  saveRuleFile(ruleMap);
  console.log(`Saved ${Object.keys(ruleMap).length} rules`);
}

main();
