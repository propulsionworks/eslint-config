const tsStylistic = Object.freeze({
  /*
   * typescript-eslint/stylistic-type-checked
   * https://github.com/typescript-eslint/typescript-eslint/blob/e44a1a280f08f9fd0d29f74e5c3e73b7b64a9606/packages/typescript-eslint/src/configs/stylistic-type-checked.ts
   */
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": "error",
  "@typescript-eslint/ban-tslint-comment": "error",
  "@typescript-eslint/class-literal-property-style": "error",
  "@typescript-eslint/consistent-generic-constructors": "error",
  "@typescript-eslint/consistent-indexed-object-style": "error",
  "@typescript-eslint/consistent-type-assertions": "error",
  // always use `type` rather than `interface`
  "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "error",
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "no-empty-function": "off",
  // no reason to disable this
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-empty-interface": "error",
  "@typescript-eslint/no-inferrable-types": "error",
  "@typescript-eslint/non-nullable-type-assertion-style": "error",
  "@typescript-eslint/prefer-for-of": "error",
  "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": "error",

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
