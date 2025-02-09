import type { Linter } from "eslint";
import { writeFileSync } from "node:fs";
import stringify from "safe-stable-stringify";
import {
  ConfigRulesetMap,
  RuleJsonPath,
  type ConfigName,
  type RuleConfig,
  type RuleConfigMap,
  type RulesetName,
} from "../ruleset.ts";

export function saveRuleFile(value: RuleConfigMap): void {
  writeFileSync(RuleJsonPath, stringify(value, undefined, 2));
}

export function getRuleConfigBySpec(
  configName: string,
  rule: RuleConfig,
): Linter.RuleEntry | undefined {
  if (configName.startsWith("ruleset:")) {
    return rule.rulesets?.[configName.slice("ruleset:".length)];
  }
  return rule.sourceConfigs?.[configName];
}

export function getRuleEnabledRulesets(rule: RuleConfig): RulesetName[] {
  if (!rule.rulesets) {
    return [];
  }
  return Object.entries(rule.rulesets)
    .filter(([, value]) => value !== "off")
    .map(([name]) => name as RulesetName);
}

export function getRuleEntryForConfig(
  rule: RuleConfig,
  config: ConfigName,
): Linter.RuleEntry | undefined {
  if (!rule.rulesets) {
    return;
  }
  const rulesets = ConfigRulesetMap[config];
  // last takes precedence
  for (const ruleset of rulesets.reverse()) {
    const entry = rule.rulesets[ruleset];
    if (entry) {
      return entry;
    }
  }
}

export function getRuleEnabledConfigs(rule: RuleConfig): ConfigName[] {
  if (!rule.rulesets) {
    return [];
  }
  return Object.keys(ConfigRulesetMap)
    .map((config) => {
      return [
        config as ConfigName,
        getRuleEntryForConfig(rule, config as ConfigName),
      ] as const;
    })
    .filter(([, entry]) => entry !== undefined && entry !== "off")
    .map(([name]) => name);
}

export function getPluginName(name: string): string | undefined {
  const index = name.indexOf("/");
  if (index > 0) {
    return name.slice(0, index);
  }
}
