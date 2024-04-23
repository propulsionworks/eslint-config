# @awboost/eslint-config

An opinionated [ESLint](https://eslint.org/) config for the @awboost packages.

## Configs

A sample eslint config js showing all available configs:

```js
import awboostConfig from "@awboost/eslint-config";

export default [
  // eslint/recommended, unicorn/recommended, and n/recommended with some tweaks
  awboost.configs.base,
  // typescript-eslint/strict-type-checked and
  // typescript-eslint/stylistic-type-checked with some tweaks
  awboost.configs["ts-base"],
  // turn off rules restricting use of `any` type
  awboost.configs["ts-relaxed-any"],
];
```

## Rules

The raw rule sets are also available for building more custom config:

```js
import awboostConfig from "@awboost/eslint-config";

export default [
  {
    files: "core/src/**/*.ts",

    rules: {
      ...awboost.rules.base,
      ...awboost.rules["ts-base"],
      ...awboost.rules["ts-strict"],
      ...awboost.rules["ts-stylistic"],
    },
  },
];
```
