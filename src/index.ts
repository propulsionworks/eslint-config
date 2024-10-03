import tsEslint from "@typescript-eslint/eslint-plugin";
import * as parser from "@typescript-eslint/parser";
import type { Linter } from "eslint";
import n from "eslint-plugin-n";
import unicorn from "eslint-plugin-unicorn";
import base from "./rules/base.js";
import tsBase from "./rules/ts-base.js";
import tsRelaxedAny from "./rules/ts-relaxed-any.js";
import tsStrict from "./rules/ts-strict.js";
import tsStylistic from "./rules/ts-stylistic.js";

export type Configs = {
  base: Linter.Config;
  ts: Linter.Config;
  "ts-relaxed-any": Linter.Config;
};

export type Rules = {
  base: Linter.RulesRecord;
  "ts-base": Linter.RulesRecord;
  "ts-relaxed-any": Linter.RulesRecord;
  "ts-strict": Linter.RulesRecord;
  "ts-stylistic": Linter.RulesRecord;
};

export type RulesAndConfigs = {
  configs: Configs;
  rules: Rules;
};

const propulsionworksConfig: RulesAndConfigs = {
  configs: {
    base: {
      name: "@propulsionworks/eslint-config/base",

      plugins: {
        n,
        unicorn,
      },

      rules: base,
    },

    ts: {
      name: "@propulsionworks/eslint-config/ts",

      files: ["**/*.ts"],

      languageOptions: {
        parser,
        parserOptions: {
          project: true,
        },
      },

      settings: {
        n: {
          convertPath: {
            "src/**/*.ts": ["^src/(.+)\\.ts$", "lib/$1.js"],
          },
        },
      },

      plugins: {
        "@typescript-eslint": tsEslint as any,
      },

      rules: {
        ...tsBase,
        ...tsStrict,
        ...tsStylistic,
      },
    },

    "ts-relaxed-any": {
      name: "@propulsionworks/eslint-config/ts-relaxed-any",
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

export default propulsionworksConfig;
