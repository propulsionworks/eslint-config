# @propulsionworks/eslint-config

An opinionated [ESLint](https://eslint.org/) config for the @propulsionworks packages.

## Rules

See [Rules](./docs/rules.md).

## Configs

A sample eslint config js showing all available configs:

```js
import propulsionworks, { config } from "@propulsionworks/eslint-config";

export default config(
  {
    files: ["**/*.js"],
    extends: [
      // eslint/recommended, unicorn/recommended, and n/recommended with some tweaks
      propulsionworksConfig.configs.js,
    ],
  },
  {
    files: ["**/*.ts"],
    extends: [
      // typescript-eslint/strict-type-checked and
      // typescript-eslint/stylistic-type-checked with some tweaks
      propulsionworksConfig.configs.ts,
      // OPTIONAL: turn off rules restricting use of `any` type
      propulsionworks.configs["ts-relaxed-any"],
    ],
  },
);
```

This package re-exports [typescript-eslint's `config` function](https://typescript-eslint.io/packages/typescript-eslint#config) for convenience.
