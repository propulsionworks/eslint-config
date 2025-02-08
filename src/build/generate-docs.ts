import { writeFileSync } from "node:fs";
import { ConfigRulesetMap, loadRuleFile, type ConfigName } from "../ruleset.ts";
import { getRuleEnabledConfigs } from "./shared.ts";

function main(): void {
  const rules = loadRuleFile();

  const sortedRuleNames = Object.keys(rules).sort((a, b) => {
    // sort core rules first
    const aIsCore = a.includes("/");
    const bIsCore = b.includes("/");

    if (aIsCore === bIsCore) {
      return a.localeCompare(b);
    }
    return aIsCore ? 1 : -1;
  });

  const toc = Object.keys(ConfigRulesetMap)
    .map((name) => `- [Config ${name}](#config-${name})`)
    .join("\n");

  let output = `# Available Rules

${toc}
- [All Rules](#all-rules)
`;

  for (const [config] of Object.entries(ConfigRulesetMap)) {
    output += `

## Config ${config}
    
| Rule | Description |
|---|---|
`;
    for (const ruleName of sortedRuleNames) {
      const rule = rules[ruleName];
      if (!rule) {
        continue;
      }
      if (!getRuleEnabledConfigs(rule).includes(config as ConfigName)) {
        continue;
      }

      let ruleNameCol: string;
      if (rule.docs?.url) {
        ruleNameCol = `[${ruleName}](${rule.docs.url})`;
      } else {
        ruleNameCol = ruleName;
      }

      const descriptionCol = rule.docs?.description ?? "";

      output += `| ${ruleNameCol} | ${descriptionCol} |\n`;
    }
  }

  output += `

## All Rules

| Rule | Description | Configs |
|---|---|---|
`;

  for (const ruleName of sortedRuleNames) {
    const rule = rules[ruleName];
    if (!rule) {
      continue;
    }

    let ruleNameCol: string;
    if (rule.docs?.url) {
      ruleNameCol = `[${ruleName}](${rule.docs.url})`;
    } else {
      ruleNameCol = ruleName;
    }

    const descriptionCol = rule.docs?.description ?? "";

    const configsCol = getRuleEnabledConfigs(rule)
      .map((config) => `[${config}](#config-${config})`)
      .join(", ");

    output += `| ${ruleNameCol} | ${descriptionCol} | ${configsCol} |\n`;
  }

  output += "\n";

  writeFileSync("./docs/rules.md", output);
}

main();
