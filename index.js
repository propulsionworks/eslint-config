import tsEslint from "@typescript-eslint/eslint-plugin";
import * as parser from "@typescript-eslint/parser";
import n from "eslint-plugin-n";
import unicorn from "eslint-plugin-unicorn";
import base from "./rules/base.js";
import tsBase from "./rules/ts-base.js";
import tsRelaxedAny from "./rules/ts-relaxed-any.js";
import tsStrict from "./rules/ts-strict.js";
import tsStylistic from "./rules/ts-stylistic.js";

/**
 * @typedef Configs
 * @property {import('eslint').Linter.FlatConfig} base
 * @property {import('eslint').Linter.FlatConfig} `ts`
 * @property {import('eslint').Linter.FlatConfig} `ts-relaxed-any`
 */

/**
 * @typedef Rules
 * @property {import('eslint').Linter.RulesRecord} base
 * @property {import('eslint').Linter.RulesRecord} `ts-base`
 * @property {import('eslint').Linter.RulesRecord} `ts-relaxed-any`
 * @property {import('eslint').Linter.RulesRecord} `ts-strict`
 * @property {import('eslint').Linter.RulesRecord} `ts-stylistic`
 */

/**
 * @typedef RulesAndConfigs
 * @property {Configs} configs
 */

/** @type {RulesAndConfigs} */
const awboostConfig = {
  configs: {
    base: {
      name: "@awboost/eslint-config/base",

      plugins: {
        n,
        unicorn,
      },

      rules: base,
    },

    ts: {
      name: "@awboost/eslint-config/ts",

      files: ["**/*.ts"],

      languageOptions: {
        parser,
        parserOptions: {
          project: true,
        },
      },

      plugins: {
        "@typescript-eslint": tsEslint,
      },

      rules: {
        ...tsBase,
        ...tsStrict,
        ...tsStylistic,
      },
    },

    "ts-relaxed-any": {
      name: "@awboost/eslint-config/ts-relaxed-any",
      files: ["**/*.ts"],
      rules: tsRelaxedAny,
    },
  },

  rules: {
    base,
    "ts-base": tsBase,
    "ts-relaxed-any": tsRelaxedAny,
    "ts-strict": tsStrict,
    "ts-stylistic": tsStylistic,
  },
};

export default awboostConfig;
