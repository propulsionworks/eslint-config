import assert from "node:assert";
import stringify from "safe-stable-stringify";
import { loadRuleFile } from "../ruleset.ts";
import { getRuleConfigBySpec } from "./shared.ts";

function main(configName?: string) {
  assert(configName, "must provide config name");
  const rules = loadRuleFile();

  const reduced = Object.fromEntries(
    Object.entries(rules).map(([name, rule]) => [
      name,
      getRuleConfigBySpec(configName, rule),
    ]),
  );

  console.log(stringify(reduced, undefined, 2));
}

main(...process.argv.slice(2));
