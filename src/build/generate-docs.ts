import { writeFileSync } from "node:fs";
import { ConfigRulesetMap, loadRuleFile } from "../ruleset.ts";
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

  for (const [config, rulesets] of Object.entries(ConfigRulesetMap)) {
    output += `

## Config ${config}
    
| Rule | Description | Level |
|---|---|---|
`;

    const reversedRulesets = rulesets.reverse();

    for (const ruleName of sortedRuleNames) {
      const rule = rules[ruleName];
      if (!rule) {
        continue;
      }

      const level = reversedRulesets
        .map((ruleset) => rule.rulesets?.[ruleset])
        .find(Boolean);

      if (!level) {
        continue;
      }

      let ruleNameCol: string;
      if (rule.docs?.url) {
        ruleNameCol = `[${ruleName}](${rule.docs.url})`;
      } else {
        ruleNameCol = ruleName;
      }

      const descriptionCol = rule.docs?.description ?? "";
      const levelCol = Array.isArray(level) ? level[0] : level;

      output += `| ${ruleNameCol} | ${descriptionCol} | ${levelCol} |\n`;
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
