import * as parser from "@typescript-eslint/parser";
import type { Linter } from "eslint";
import n from "eslint-plugin-n";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";
import { getConfigRulesets, type ConfigName } from "./ruleset.ts";

/**
 * Create configs using "extend". Re-exported from typescript-eslint for
 * convenience.
 * @see {@link https://typescript-eslint.io/packages/typescript-eslint#config}
 */
export { config } from "typescript-eslint";

export type PropulsionWorksEslint = {
  configs: Record<ConfigName, Linter.Config>;
};

const propulsionworks: PropulsionWorksEslint = {
  configs: {
    js: {
      name: "@propulsionworks/js",

      plugins: {
        n,
        unicorn,
      },

      rules: getConfigRulesets("js"),
    },

    ts: {
      name: "@propulsionworks/ts",

      languageOptions: {
        parser,
        parserOptions: {
          project: true,
        },
      },

      plugins: {
        n,
        unicorn,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        "@typescript-eslint": tseslint.plugin as any,
      },

      rules: getConfigRulesets("ts"),
    },

    "ts-relaxed-any": {
      rules: getConfigRulesets("ts-relaxed-any"),
    },
  },
};

export default propulsionworks;
