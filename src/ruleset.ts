import { type Rule, Linter } from "eslint";
import assert from "node:assert";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const RuleJsonPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../rule-meta.json",
);

export type RuleMetaDocs = Exclude<Rule.RuleMetaData["docs"], undefined>;

export type Config = Pick<Linter.Config, "name" | "rules">;
export type Configs = Config | Config[];
export type FlatConfigMap = Record<string, Configs>;
export type RuleMap = Record<string, Rule.RuleModule>;
export type RuleCache = Record<string, Record<string, Linter.RuleEntry>>;

export type RulesetName =
  | "js"
  | "ts-base"
  | "ts-strict"
  | "ts-stylistic"
  | "ts-relaxed-any";

export type ConfigName = "js" | "ts" | "ts-relaxed-any";

export type RuleConfig = {
  docs?: RuleMetaDocs;
  rulesets?: Record<string, Linter.RuleEntry>;
  sourceConfigs?: Record<string, Linter.RuleEntry>;
};

export type RuleConfigMap = Record<string, RuleConfig>;

export const ConfigRulesetMap: Record<ConfigName, RulesetName[]> = {
  js: ["js"],
  ts: ["js", "ts-base", "ts-strict", "ts-stylistic"],
  "ts-relaxed-any": ["ts-relaxed-any"],
};

export function loadRuleFile(): RuleConfigMap {
  return JSON.parse(readFileSync(RuleJsonPath, "utf-8")) as RuleConfigMap;
}

let rulesetCache: RuleCache | undefined;

export function loadAndCacheRules(): RuleCache {
  if (rulesetCache) {
    return rulesetCache;
  }

  const rules = loadRuleFile();
  rulesetCache = {};

  for (const [ruleName, rule] of Object.entries(rules)) {
    if (!rule.rulesets) {
      continue;
    }
    for (const [configName, config] of Object.entries(rule.rulesets)) {
      if (!rulesetCache[configName]) {
        rulesetCache[configName] = {};
      }
      rulesetCache[configName][ruleName] = config;
    }
  }

  return rulesetCache;
}

export function getRuleset(
  name: RulesetName,
): Record<string, Linter.RuleEntry> {
  const ruleset = loadAndCacheRules()[name];
  assert(ruleset, `invalid ruleset name "${name}"`);
  return ruleset;
}

export function getConfigRulesets(
  name: ConfigName,
): Record<string, Linter.RuleEntry> {
  const rulesets = ConfigRulesetMap[name];
  assert(rulesets, `invalid config name "${name}"`);

  const rules: Record<string, Linter.RuleEntry> = {};
  for (const ruleset of rulesets) {
    Object.assign(rules, getRuleset(ruleset));
  }

  return rules;
}
