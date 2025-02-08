import propulsionworksConfig, { config } from "./dist/index.js";

export default config(
  {
    ignores: ["dist/"],
  },
  {
    files: ["**/*.js"],
    extends: [propulsionworksConfig.configs.js],
  },
  {
    files: ["**/*.ts"],
    extends: [propulsionworksConfig.configs.ts],

    rules: {
      "n/no-extraneous-import": [
        "error",
        // this is included in the "typescript-eslint" package
        { allowModules: ["@typescript-eslint/parser"] },
      ],
    },
  },
  {
    files: ["src/build/**"],
    rules: {
      // these files aren't included in the package
      "n/no-extraneous-import": "off",
    },
  },
);
