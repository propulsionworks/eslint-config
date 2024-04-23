const tsBase = Object.freeze({
  // from ts-eslint
  // https://github.com/typescript-eslint/typescript-eslint/blob/e44a1a280f08f9fd0d29f74e5c3e73b7b64a9606/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts#L22
  "constructor-super": "off", // ts(2335) & ts(2377)
  "getter-return": "off", // ts(2378)
  "no-const-assign": "off", // ts(2588)
  "no-dupe-args": "off", // ts(2300)
  "no-dupe-class-members": "off", // ts(2393) & ts(2300)
  "no-dupe-keys": "off", // ts(1117)
  "no-func-assign": "off", // ts(2630)
  "no-import-assign": "off", // ts(2632) & ts(2540)
  "no-new-native-nonconstructor": "off", // ts(7009)
  "no-obj-calls": "off", // ts(2349)
  "no-redeclare": "off", // ts(2451)
  "no-setter-return": "off", // ts(2408)
  "no-this-before-super": "off", // ts(2376) & ts(17009)
  "no-undef": "off", // ts(2304) & ts(2552)
  "no-unreachable": "off", // ts(7027)
  "no-unsafe-negation": "off", // ts(2365) & ts(2322) & ts(2358)

  /*
   * @typescript-eslint/recommended-type-checked
   * https://github.com/typescript-eslint/typescript-eslint/blob/e44a1a280f08f9fd0d29f74e5c3e73b7b64a9606/packages/typescript-eslint/src/configs/recommended-type-checked.ts
   */
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/ban-ts-comment": "error",
  "@typescript-eslint/ban-types": "error",
  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "error",
  "@typescript-eslint/no-base-to-string": "error",
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-duplicate-type-constituents": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": "error",
  "no-loss-of-precision": "off",
  "@typescript-eslint/no-loss-of-precision": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-redundant-type-constituents": "error",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-type-assertion": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unsafe-argument": "error",
  "@typescript-eslint/no-unsafe-assignment": "error",
  "@typescript-eslint/no-unsafe-call": "error",
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-enum-comparison": "error",
  "@typescript-eslint/no-unsafe-member-access": "error",
  "@typescript-eslint/no-unsafe-return": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "error",
  "@typescript-eslint/no-var-requires": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "require-await": "off",
  "@typescript-eslint/require-await": "error",
  "@typescript-eslint/restrict-plus-operands": "error",
  "@typescript-eslint/restrict-template-expressions": "error",
  "@typescript-eslint/triple-slash-reference": "error",
  "@typescript-eslint/unbound-method": "error",

  // need to pass args to satisfy types
  "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
});

export default tsBase;
