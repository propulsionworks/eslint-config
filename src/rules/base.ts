/**
 * Represents the base rule config.
 */
const base: Readonly<Record<string, any>> = Object.freeze({
  /*
   * eslint/recommended
   * https://github.com/eslint/eslint/blob/e1ac0b5c035bfdff7be08b69e89e1470a7becac3/packages/js/src/configs/eslint-recommended.js
   */
  "constructor-super": "error",
  "for-direction": "error",
  "getter-return": "error",
  "no-async-promise-executor": "error",
  "no-case-declarations": "error",
  "no-class-assign": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-const-assign": "error",
  "no-constant-binary-expression": "error",
  "no-constant-condition": "error",
  "no-control-regex": "error",
  "no-debugger": "error",
  "no-delete-var": "error",
  "no-dupe-args": "error",
  "no-dupe-class-members": "error",
  "no-dupe-else-if": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-empty": "off", // this is useful when its intended and obvious when its not
  "no-empty-character-class": "error",
  "no-empty-pattern": "error",
  "no-empty-static-block": "error",
  "no-ex-assign": "error",
  "no-extra-boolean-cast": "error",
  "no-fallthrough": "error",
  "no-func-assign": "error",
  "no-global-assign": "error",
  "no-import-assign": "error",
  "no-invalid-regexp": "error",
  "no-irregular-whitespace": "error",
  "no-loss-of-precision": "error",
  "no-misleading-character-class": "error",
  "no-nested-ternary": "error",
  "no-new-native-nonconstructor": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-obj-calls": "error",
  "no-octal": "error",
  "no-prototype-builtins": "error",
  "no-redeclare": "error",
  "no-regex-spaces": "error",
  "no-self-assign": "error",
  "no-setter-return": "error",
  "no-shadow-restricted-names": "error",
  "no-sparse-arrays": "error",
  "no-this-before-super": "error",
  "no-undef": "error",
  "no-unexpected-multiline": "error",
  "no-unreachable": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-unsafe-optional-chaining": "error",
  "no-unused-labels": "error",
  "no-unused-private-class-members": "error",
  "no-unused-vars": "error",
  "no-useless-backreference": "error",
  "no-useless-catch": "error",
  "no-useless-escape": "error",
  "no-warning-comments": "error",
  "no-with": "error",
  "require-yield": "error",
  "use-isnan": "error",
  "valid-typeof": "error",

  /*
   * unicorn/recommended
   * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/e0dfed2659993b8fc844bc19e485bde3af1407c4/configs/recommended.js
   */
  "unicorn/better-regex": "error",
  "unicorn/catch-error-name": "off", // this isn't useful
  "unicorn/consistent-destructuring": "off",
  "unicorn/consistent-empty-array-spreading": "off", // pointless with type checking
  "unicorn/consistent-function-scoping": "off", // this isn't useful
  "unicorn/custom-error-definition": "error", // this is helpful
  "unicorn/empty-brace-spaces": "off", // this is formatting-related
  "unicorn/error-message": "error",
  "unicorn/escape-case": "off", // this is formatting-related
  "unicorn/expiring-todo-comments": "error",
  "unicorn/explicit-length-check": "error",
  "unicorn/filename-case": "error",
  "unicorn/import-style": "off", // this doesn't make sense
  "unicorn/new-for-builtins": "error",
  "unicorn/no-abusive-eslint-disable": "error",
  "unicorn/no-anonymous-default-export": "error",
  "unicorn/no-array-callback-reference": "off", // unnecessary with types
  "unicorn/no-array-for-each": "error",
  "unicorn/no-array-method-this-argument": "off", // false positives due to lack of type analysis
  "unicorn/no-array-push-push": "off", // this is overzealous
  "unicorn/no-array-reduce": "error",
  "unicorn/no-await-expression-member": "error",
  "unicorn/no-await-in-promise-methods": "error",
  "unicorn/no-console-spaces": "error",
  "unicorn/no-document-cookie": "error",
  "unicorn/no-empty-file": "error",
  "unicorn/no-for-loop": "error",
  "unicorn/no-hex-escape": "error",
  "unicorn/no-instanceof-array": "error",
  "unicorn/no-invalid-remove-event-listener": "error",
  "unicorn/no-keyword-prefix": "off",
  "unicorn/no-lonely-if": "off", // this is useful to stop weird wrapping by prettier
  "no-negated-condition": "off",
  "unicorn/no-negated-condition": "error",
  // "no-nested-ternary": "off",
  "unicorn/no-nested-ternary": "off", // keep the eslint default
  "unicorn/no-new-array": "error",
  "unicorn/no-new-buffer": "error",
  "unicorn/no-null": "error",
  "unicorn/no-object-as-default-parameter": "error",
  "unicorn/no-process-exit": "error",
  "unicorn/no-single-promise-in-promise-methods": "error",
  "unicorn/no-static-only-class": "error",
  "unicorn/no-thenable": "error",
  "unicorn/no-this-assignment": "error",
  "unicorn/no-typeof-undefined": "error",
  "unicorn/no-unnecessary-await": "error",
  "unicorn/no-unnecessary-polyfills": "error",
  "unicorn/no-unreadable-array-destructuring": "error",
  "unicorn/no-unreadable-iife": "error",
  "unicorn/no-unused-properties": "error", // added
  "unicorn/no-useless-fallback-in-spread": "error",
  "unicorn/no-useless-length-check": "error",
  "unicorn/no-useless-promise-resolve-reject": "error",
  "unicorn/no-useless-spread": "error",
  "unicorn/no-useless-switch-case": "error",
  "unicorn/no-useless-undefined": "error",
  "unicorn/no-zero-fractions": "error",
  "unicorn/number-literal-case": "off", // fights with prettier
  "unicorn/numeric-separators-style": "off", // unnecessary
  "unicorn/prefer-add-event-listener": "error",
  "unicorn/prefer-array-find": "error",
  "unicorn/prefer-array-flat": "error",
  "unicorn/prefer-array-flat-map": "error",
  "unicorn/prefer-array-index-of": "error",
  "unicorn/prefer-array-some": "error",
  "unicorn/prefer-at": "error",
  "unicorn/prefer-blob-reading-methods": "error",
  "unicorn/prefer-code-point": "error",
  "unicorn/prefer-date-now": "error",
  "unicorn/prefer-default-parameters": "error",
  "unicorn/prefer-dom-node-append": "error",
  "unicorn/prefer-dom-node-dataset": "error",
  "unicorn/prefer-dom-node-remove": "error",
  "unicorn/prefer-dom-node-text-content": "error",
  "unicorn/prefer-event-target": "error",
  "unicorn/prefer-export-from": "error",
  "unicorn/prefer-includes": "error",
  "unicorn/prefer-json-parse-buffer": "off",
  "unicorn/prefer-keyboard-event-key": "error",
  "unicorn/prefer-logical-operator-over-ternary": "error",
  "unicorn/prefer-math-trunc": "error",
  "unicorn/prefer-modern-dom-apis": "error",
  "unicorn/prefer-modern-math-apis": "error",
  "unicorn/prefer-module": "error",
  "unicorn/prefer-native-coercion-functions": "error",
  "unicorn/prefer-negative-index": "error",
  "unicorn/prefer-node-protocol": "error",
  "unicorn/prefer-number-properties": "error",
  "unicorn/prefer-object-from-entries": "error",
  "unicorn/prefer-optional-catch-binding": "off", // not needed with no-unused-vars
  "unicorn/prefer-prototype-methods": "error",
  "unicorn/prefer-query-selector": "error",
  "unicorn/prefer-reflect-apply": "error",
  "unicorn/prefer-regexp-test": "error",
  "unicorn/prefer-set-has": "error",
  "unicorn/prefer-set-size": "error",
  "unicorn/prefer-spread": "off", // unnecessary
  "unicorn/prefer-string-replace-all": "error",
  "unicorn/prefer-string-slice": "error",
  "unicorn/prefer-string-starts-ends-with": "error",
  "unicorn/prefer-string-trim-start-end": "error",
  "unicorn/prefer-switch": "off", // if anything it should be the opposite...
  "unicorn/prefer-ternary": "error", // stupid
  "unicorn/prefer-top-level-await": "error",
  "unicorn/prefer-type-error": "error",
  "unicorn/prevent-abbreviations": "off", // really annoying in practice
  "unicorn/relative-url-style": "error",
  "unicorn/require-array-join-separator": "error",
  "unicorn/require-number-to-fixed-digits-argument": "error",
  "unicorn/require-post-message-target-origin": "off",
  "unicorn/string-content": "off",
  "unicorn/switch-case-braces": "off", // unnecessary
  "unicorn/template-indent": "off", // shouldn't be a default
  "unicorn/text-encoding-identifier-case": "off", // unnecessary
  "unicorn/throw-new-error": "error",

  /*
   * n/recommended
   */
  "n/no-deprecated-api": "error",
  "n/no-extraneous-import": "error",
  "n/no-extraneous-require": "error",
  "n/no-exports-assign": "error",
  "n/no-missing-import": "error",
  "n/no-missing-require": "error",
  "n/no-process-env": "warn",
  "n/no-process-exit": "error",
  "n/no-unpublished-bin": "error",
  "n/no-unpublished-import": "error",
  "n/no-unpublished-require": "error",
  "n/no-unsupported-features/es-builtins": "error",
  "n/no-unsupported-features/es-syntax": "error",
  "n/no-unsupported-features/node-builtins": "error",
  "n/process-exit-as-throw": "error",
  "n/hashbang": "error",

  /*
   * Custom additions
   */
  "array-callback-return": "error",
  curly: "error",
  eqeqeq: "error",
  "no-param-reassign": "error",
  "no-constructor-return": "error",
  "no-duplicate-imports": "error",
  "no-else-return": "warn",
  "no-labels": "error",
  "no-promise-executor-return": "error",
  "no-template-curly-in-string": "warn",
  "no-unmodified-loop-condition": "error",
  "no-unreachable-loop": "error",
  "no-unused-expressions": "error",
  //"no-useless-assignment": "error", // eslint 9
  "no-useless-computed-key": "error",
  "no-useless-rename": "error",
  "no-var": "error",
  "prefer-const": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
});

export default base;
