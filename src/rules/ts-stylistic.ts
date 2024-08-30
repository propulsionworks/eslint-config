const tsStylistic: Readonly<Record<string, any>> = Object.freeze({
  /*
   * typescript-eslint/stylistic-type-checked
   * https://github.com/typescript-eslint/typescript-eslint/blob/46f27e6b1c5d5150dbacf06796dc3836d88b0abf/packages/typescript-eslint/src/configs/stylistic-type-checked.ts
   */
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": "error",
  "@typescript-eslint/ban-tslint-comment": "error",
  "@typescript-eslint/class-literal-property-style": "error",
  "@typescript-eslint/consistent-generic-constructors": "error",
  "@typescript-eslint/consistent-indexed-object-style": "error",
  "@typescript-eslint/consistent-type-assertions": "error",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "error",
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "no-empty-function": "off",
  "@typescript-eslint/no-inferrable-types": "error",
  "@typescript-eslint/non-nullable-type-assertion-style": "error",
  "@typescript-eslint/prefer-find": "error",
  "@typescript-eslint/prefer-for-of": "error",
  "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-includes": "error",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": "error",

  // overrides
  "@typescript-eslint/consistent-type-definitions": ["error", "type"], // require `type` instead of `interface`
  "@typescript-eslint/no-empty-function": "off", // unnecessary

  // supersedes
  "unicorn/prefer-array-find": "off", // @typescript-eslint/prefer-find
  "unicorn/no-for-loop": "off", // @typescript-eslint/prefer-for-of
  "unicorn/prefer-includes": "off", // @typescript-eslint/prefer-includes
  "unicorn/prefer-string-starts-ends-with": "off", // @typescript-eslint/prefer-string-starts-ends-with

  /*
   * Custom
   */
  "@typescript-eslint/explicit-member-accessibility": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
  // method signatures have broken variance
  "@typescript-eslint/method-signature-style": "error",
  // prevent unexpected side effects
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-unsafe-unary-minus": "error",
  "@typescript-eslint/prefer-readonly": "error",
});

export default tsStylistic;
