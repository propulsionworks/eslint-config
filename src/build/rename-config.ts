import assert from "node:assert";
import { loadRuleFile } from "../ruleset.ts";
import { saveRuleFile } from "./shared.ts";

function main(...args: string[]) {
  const [oldConfigName, newConfigName] = args;
  assert(oldConfigName, "must provide old config name");
  assert(newConfigName, "must provide new config name");

  const rules = loadRuleFile();

  for (const [name, rule] of Object.entries(rules)) {
    if (!rule.rulesets) {
      continue;
    }
    if (rule.rulesets[oldConfigName]) {
      rule.rulesets[newConfigName] = rule.rulesets[oldConfigName];
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete rule.rulesets[oldConfigName];
      console.log(`updated rule "${name}"`);
    }
  }

  saveRuleFile(rules);
}

main(...process.argv.slice(2));
