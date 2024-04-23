const tsStrict = Object.freeze({
  /*
   * typescript-eslint/strict-type-checked
   * https://github.com/typescript-eslint/typescript-eslint/blob/e44a1a280f08f9fd0d29f74e5c3e73b7b64a9606/packages/typescript-eslint/src/configs/strict-type-checked.ts
   */
  "@typescript-eslint/no-array-delete": "error",
  "@typescript-eslint/no-confusing-void-expression": "error",
  "@typescript-eslint/no-dynamic-delete": "off", // no reason to disable this
  "@typescript-eslint/no-extraneous-class": "error",
  "@typescript-eslint/no-invalid-void-type": "error",
  "@typescript-eslint/no-meaningless-void-operator": "error",
  "@typescript-eslint/no-mixed-enums": "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-assertion": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
  "@typescript-eslint/no-unnecessary-condition": "error",
  "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "no-useless-constructor": "off",
  "@typescript-eslint/no-useless-constructor": "error",
  "@typescript-eslint/no-useless-template-literals": "error",
  "no-throw-literal": "off",
  "@typescript-eslint/only-throw-error": "error",
  "@typescript-eslint/prefer-includes": "error",
  "@typescript-eslint/prefer-literal-enum-member": "error",
  "prefer-promise-reject-errors": "off",
  "@typescript-eslint/prefer-promise-reject-errors": "error",
  "@typescript-eslint/prefer-reduce-type-parameter": "error",
  "@typescript-eslint/prefer-return-this-type": "error",
  "@typescript-eslint/prefer-ts-expect-error": "error",
  "@typescript-eslint/restrict-plus-operands": [
    "error",
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false,
    },
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      allowAny: false,
      allowBoolean: true,
      allowNullish: false,
      allowNumber: true,
      allowRegExp: false,
      allowNever: false,
    },
  ],
  "@typescript-eslint/unified-signatures": "error",
  "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
});

export default tsStrict;
