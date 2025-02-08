import assert from "node:assert";
import { loadRuleFile } from "../ruleset.ts";
import { getRuleConfigBySpec, saveRuleFile } from "./shared.ts";

function main(newConfigName: string | undefined, ...copyFrom: string[]) {
  assert(newConfigName, "must provide config name");

  if (copyFrom.length === 0) {
    console.error("nothing to do");
    return;
  }

  const rules = loadRuleFile();

  for (const [name, rule] of Object.entries(rules)) {
    for (const copyName of copyFrom) {
      const copy = getRuleConfigBySpec(copyName, rule);
      if (!copy) {
        continue;
      }
      if (!rule.rulesets) {
        rule.rulesets = {};
      }
      rule.rulesets[newConfigName] = copy;
      console.log(`added rule ${name} (from ${copyName})`);
      break;
    }
  }

  saveRuleFile(rules);
}

main(process.argv[2], ...process.argv.slice(3));
