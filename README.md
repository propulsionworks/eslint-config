# @propulsionworks/eslint-config

An opinionated [ESLint](https://eslint.org/) config for the @propulsionworks packages.

## Configs

A sample eslint config js showing all available configs:

```js
import propulsionworksConfig from "@propulsionworks/eslint-config";

export default [
  // eslint/recommended, unicorn/recommended, and n/recommended with some tweaks
  propulsionworks.configs.base,
  // typescript-eslint/strict-type-checked and
  // typescript-eslint/stylistic-type-checked with some tweaks
  propulsionworks.configs["ts-base"],
  // turn off rules restricting use of `any` type
  propulsionworks.configs["ts-relaxed-any"],
];
```

## Rules

The raw rule sets are also available for building more custom config:

```js
import propulsionworksConfig from "@propulsionworks/eslint-config";

export default [
  {
    files: "core/src/**/*.ts",

    rules: {
      ...propulsionworks.rules.base,
      ...propulsionworks.rules["ts-base"],
      ...propulsionworks.rules["ts-strict"],
      ...propulsionworks.rules["ts-stylistic"],
    },
  },
];
```
