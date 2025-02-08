# Available Rules

- [Config js](#config-js)
- [Config ts](#config-ts)
- [Config ts-relaxed-any](#config-ts-relaxed-any)
- [All Rules](#all-rules)


## Config js
    
| Rule | Description |
|---|---|
| [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return) | Enforce `return` statements in callbacks of array methods |
| [constructor-super](https://eslint.org/docs/latest/rules/constructor-super) | Require `super()` calls in constructors |
| [curly](https://eslint.org/docs/latest/rules/curly) | Enforce consistent brace style for all control statements |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq) | Require the use of `===` and `!==` |
| [for-direction](https://eslint.org/docs/latest/rules/for-direction) | Enforce `for` loop update clause moving the counter in the right direction |
| [getter-return](https://eslint.org/docs/latest/rules/getter-return) | Enforce `return` statements in getters |
| [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor) | Disallow using an async function as a Promise executor |
| [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations) | Disallow lexical declarations in case clauses |
| [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign) | Disallow reassigning class members |
| [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero) | Disallow comparing against `-0` |
| [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign) | Disallow assignment operators in conditional expressions |
| [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign) | Disallow reassigning `const` variables |
| [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression) | Disallow expressions where the operation doesn't affect the value |
| [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition) | Disallow constant expressions in conditions |
| [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return) | Disallow returning value from constructor |
| [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex) | Disallow control characters in regular expressions |
| [no-debugger](https://eslint.org/docs/latest/rules/no-debugger) | Disallow the use of `debugger` |
| [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var) | Disallow deleting variables |
| [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args) | Disallow duplicate arguments in `function` definitions |
| [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members) | Disallow duplicate class members |
| [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if) | Disallow duplicate conditions in if-else-if chains |
| [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys) | Disallow duplicate keys in object literals |
| [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case) | Disallow duplicate case labels |
| [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports) | Disallow duplicate module imports |
| [no-else-return](https://eslint.org/docs/latest/rules/no-else-return) | Disallow `else` blocks after `return` statements in `if` statements |
| [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class) | Disallow empty character classes in regular expressions |
| [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern) | Disallow empty destructuring patterns |
| [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block) | Disallow empty static blocks |
| [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign) | Disallow reassigning exceptions in `catch` clauses |
| [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast) | Disallow unnecessary boolean casts |
| [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough) | Disallow fallthrough of `case` statements |
| [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign) | Disallow reassigning `function` declarations |
| [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign) | Disallow assignments to native objects or read-only global variables |
| [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign) | Disallow assigning to imported bindings |
| [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp) | Disallow invalid regular expression strings in `RegExp` constructors |
| [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace) | Disallow irregular whitespace |
| [no-labels](https://eslint.org/docs/latest/rules/no-labels) | Disallow labeled statements |
| [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision) | Disallow literal numbers that lose precision |
| [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class) | Disallow characters which are made with multiple code points in character class syntax |
| [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary) | Disallow nested ternary expressions |
| [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor) | Disallow `new` operators with global non-constructor functions |
| [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape) | Disallow `\8` and `\9` escape sequences in string literals |
| [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls) | Disallow calling global object properties as functions |
| [no-octal](https://eslint.org/docs/latest/rules/no-octal) | Disallow octal literals |
| [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign) | Disallow reassigning function parameters |
| [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return) | Disallow returning values from Promise executor functions |
| [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins) | Disallow calling some `Object.prototype` methods directly on objects |
| [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare) | Disallow variable redeclaration |
| [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces) | Disallow multiple spaces in regular expressions |
| [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign) | Disallow assignments where both sides are exactly the same |
| [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return) | Disallow returning values from setters |
| [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names) | Disallow identifiers from shadowing restricted names |
| [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays) | Disallow sparse arrays |
| [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string) | Disallow template literal placeholder syntax in regular strings |
| [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super) | Disallow `this`/`super` before calling `super()` in constructors |
| [no-undef](https://eslint.org/docs/latest/rules/no-undef) | Disallow the use of undeclared variables unless mentioned in `/*global */` comments |
| [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline) | Disallow confusing multiline expressions |
| [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition) | Disallow unmodified loop conditions |
| [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable) | Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements |
| [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop) | Disallow loops with a body that allows only one iteration |
| [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally) | Disallow control flow statements in `finally` blocks |
| [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation) | Disallow negating the left operand of relational operators |
| [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining) | Disallow use of optional chaining in contexts where the `undefined` value is not allowed |
| [no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions) | Disallow unused expressions |
| [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels) | Disallow unused labels |
| [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members) | Disallow unused private class members |
| [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars) | Disallow unused variables |
| [no-useless-assignment](https://eslint.org/docs/latest/rules/no-useless-assignment) | Disallow variable assignments when the value is not used |
| [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference) | Disallow useless backreferences in regular expressions |
| [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch) | Disallow unnecessary `catch` clauses |
| [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key) | Disallow unnecessary computed property keys in objects and classes |
| [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape) | Disallow unnecessary escape characters |
| [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename) | Disallow renaming import, export, and destructured assignments to the same name |
| [no-var](https://eslint.org/docs/latest/rules/no-var) | Require `let` or `const` instead of `var` |
| [no-warning-comments](https://eslint.org/docs/latest/rules/no-warning-comments) | Disallow specified warning terms in comments |
| [no-with](https://eslint.org/docs/latest/rules/no-with) | Disallow `with` statements |
| [prefer-const](https://eslint.org/docs/latest/rules/prefer-const) | Require `const` declarations for variables that are never reassigned after declared |
| [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params) | Require rest parameters instead of `arguments` |
| [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread) | Require spread operators instead of `.apply()` |
| [require-yield](https://eslint.org/docs/latest/rules/require-yield) | Require generator functions to contain `yield` |
| [use-isnan](https://eslint.org/docs/latest/rules/use-isnan) | Require calls to `isNaN()` when checking for `NaN` |
| [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof) | Enforce comparing `typeof` expressions against valid strings |
| [n/hashbang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md) | require correct usage of hashbang |
| [n/no-deprecated-api](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md) | disallow deprecated APIs |
| [n/no-exports-assign](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md) | disallow the assignment to `exports` |
| [n/no-extraneous-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md) | disallow `import` declarations which import extraneous modules |
| [n/no-extraneous-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md) | disallow `require()` expressions which import extraneous modules |
| [n/no-missing-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md) | disallow `import` declarations which import non-existence modules |
| [n/no-missing-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md) | disallow `require()` expressions which import non-existence modules |
| [n/no-process-env](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md) | disallow the use of `process.env` |
| [n/no-process-exit](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md) | disallow the use of `process.exit()` |
| [n/no-unpublished-bin](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md) | disallow `bin` files that npm ignores |
| [n/no-unpublished-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md) | disallow `import` declarations which import private modules |
| [n/no-unpublished-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md) | disallow `require()` expressions which import private modules |
| [n/no-unsupported-features/es-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md) | disallow unsupported ECMAScript built-ins on the specified version |
| [n/no-unsupported-features/es-syntax](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md) | disallow unsupported ECMAScript syntax on the specified version |
| [n/no-unsupported-features/node-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md) | disallow unsupported Node.js built-in APIs on the specified version |
| [n/process-exit-as-throw](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md) | require that `process.exit()` expressions use the same code path as `throw` |
| [unicorn/better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/better-regex.md) | Improve regexes by making them shorter, consistent, and safer. |
| [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/error-message.md) | Enforce passing a `message` value when creating a built-in error. |
| [unicorn/expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/expiring-todo-comments.md) | Add expiration conditions to TODO comments. |
| [unicorn/explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/explicit-length-check.md) | Enforce explicitly comparing the `length` or `size` property of a value. |
| [unicorn/filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/filename-case.md) | Enforce a case style for filenames. |
| [unicorn/new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/new-for-builtins.md) | Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. |
| [unicorn/no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-abusive-eslint-disable.md) | Enforce specifying rules to disable in `eslint-disable` comments. |
| [unicorn/no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-anonymous-default-export.md) | Disallow anonymous functions and classes as the default export. |
| [unicorn/no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-for-each.md) | Prefer `for…of` over the `forEach` method. |
| [unicorn/no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-reduce.md) | Disallow `Array#reduce()` and `Array#reduceRight()`. |
| [unicorn/no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-expression-member.md) | Disallow member access from await expression. |
| [unicorn/no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-in-promise-methods.md) | Disallow using `await` in `Promise` method parameters. |
| [unicorn/no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-console-spaces.md) | Do not use leading/trailing space between `console.log` parameters. |
| [unicorn/no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-document-cookie.md) | Do not use `document.cookie` directly. |
| [unicorn/no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-empty-file.md) | Disallow empty files. |
| [unicorn/no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-for-loop.md) | Do not use a `for` loop that can be replaced with a `for-of` loop. |
| [unicorn/no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-hex-escape.md) | Enforce the use of Unicode escapes instead of hexadecimal escapes. |
| [unicorn/no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-instanceof-array.md) | Require `Array.isArray()` instead of `instanceof Array`. |
| [unicorn/no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-remove-event-listener.md) | Prevent calling `EventTarget#removeEventListener()` with the result of an expression. |
| [unicorn/no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negated-condition.md) | Disallow negated conditions. |
| [unicorn/no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-array.md) | Disallow `new Array()`. |
| [unicorn/no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-buffer.md) | Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`. |
| [unicorn/no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-null.md) | Disallow the use of the `null` literal. |
| [unicorn/no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-object-as-default-parameter.md) | Disallow the use of objects as default parameters. |
| [unicorn/no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-process-exit.md) | Disallow `process.exit()`. |
| [unicorn/no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-single-promise-in-promise-methods.md) | Disallow passing single-element arrays to `Promise` methods. |
| [unicorn/no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-static-only-class.md) | Disallow classes that only have static members. |
| [unicorn/no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-thenable.md) | Disallow `then` property. |
| [unicorn/no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-this-assignment.md) | Disallow assigning `this` to a variable. |
| [unicorn/no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-typeof-undefined.md) | Disallow comparing `undefined` using `typeof`. |
| [unicorn/no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-await.md) | Disallow awaiting non-promise values. |
| [unicorn/no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-polyfills.md) | Enforce the use of built-in methods instead of unnecessary polyfills. |
| [unicorn/no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-array-destructuring.md) | Disallow unreadable array destructuring. |
| [unicorn/no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-iife.md) | Disallow unreadable IIFEs. |
| [unicorn/no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-fallback-in-spread.md) | Disallow useless fallback when spreading in object literals. |
| [unicorn/no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-length-check.md) | Disallow useless array length check. |
| [unicorn/no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-promise-resolve-reject.md) | Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks |
| [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-spread.md) | Disallow unnecessary spread. |
| [unicorn/no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-switch-case.md) | Disallow useless case in switch statements. |
| [unicorn/no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-undefined.md) | Disallow useless `undefined`. |
| [unicorn/no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-zero-fractions.md) | Disallow number literals with zero fractions or dangling dots. |
| [unicorn/prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-add-event-listener.md) | Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions. |
| [unicorn/prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-find.md) | Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`. |
| [unicorn/prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat.md) | Prefer `Array#flat()` over legacy techniques to flatten arrays. |
| [unicorn/prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat-map.md) | Prefer `.flatMap(…)` over `.map(…).flat()`. |
| [unicorn/prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-index-of.md) | Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item. |
| [unicorn/prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-some.md) | Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`. |
| [unicorn/prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-at.md) | Prefer `.at()` method for index access and `String#charAt()`. |
| [unicorn/prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-blob-reading-methods.md) | Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`. |
| [unicorn/prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-code-point.md) | Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`. |
| [unicorn/prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-date-now.md) | Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch. |
| [unicorn/prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-default-parameters.md) | Prefer default parameters over reassignment. |
| [unicorn/prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-append.md) | Prefer `Node#append()` over `Node#appendChild()`. |
| [unicorn/prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-dataset.md) | Prefer using `.dataset` on DOM elements over calling attribute methods. |
| [unicorn/prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-remove.md) | Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`. |
| [unicorn/prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-text-content.md) | Prefer `.textContent` over `.innerText`. |
| [unicorn/prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-event-target.md) | Prefer `EventTarget` over `EventEmitter`. |
| [unicorn/prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-export-from.md) | Prefer `export…from` when re-exporting. |
| [unicorn/prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-includes.md) | Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence. |
| [unicorn/prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-keyboard-event-key.md) | Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`. |
| [unicorn/prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-logical-operator-over-ternary.md) | Prefer using a logical operator over a ternary. |
| [unicorn/prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-trunc.md) | Enforce the use of `Math.trunc` instead of bitwise operators. |
| [unicorn/prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-dom-apis.md) | Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`. |
| [unicorn/prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-math-apis.md) | Prefer modern `Math` APIs over legacy patterns. |
| [unicorn/prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md) | Prefer JavaScript modules (ESM) over CommonJS. |
| [unicorn/prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-native-coercion-functions.md) | Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly. |
| [unicorn/prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-negative-index.md) | Prefer negative index over `.length - index` when possible. |
| [unicorn/prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-node-protocol.md) | Prefer using the `node:` protocol when importing Node.js builtin modules. |
| [unicorn/prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-number-properties.md) | Prefer `Number` static properties over global ones. |
| [unicorn/prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-object-from-entries.md) | Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object. |
| [unicorn/prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-prototype-methods.md) | Prefer borrowing methods from the prototype instead of the instance. |
| [unicorn/prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-query-selector.md) | Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`. |
| [unicorn/prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-reflect-apply.md) | Prefer `Reflect.apply()` over `Function#apply()`. |
| [unicorn/prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-regexp-test.md) | Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`. |
| [unicorn/prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-size.md) | Prefer using `Set#size` instead of `Array#length`. |
| [unicorn/prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-replace-all.md) | Prefer `String#replaceAll()` over regex searches with the global flag. |
| [unicorn/prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-slice.md) | Prefer `String#slice()` over `String#substr()` and `String#substring()`. |
| [unicorn/prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-starts-ends-with.md) | Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`. |
| [unicorn/prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-trim-start-end.md) | Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`. |
| [unicorn/prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-top-level-await.md) | Prefer top-level await over top-level promises and async function calls. |
| [unicorn/prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-type-error.md) | Enforce throwing `TypeError` in type checking conditions. |
| [unicorn/relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/relative-url-style.md) | Enforce consistent relative URL style. |
| [unicorn/require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-array-join-separator.md) | Enforce using the separator argument with `Array#join()`. |
| [unicorn/require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-number-to-fixed-digits-argument.md) | Enforce using the digits argument with `Number#toFixed()`. |
| [unicorn/throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/throw-new-error.md) | Require `new` when creating an error. |


## Config ts
    
| Rule | Description |
|---|---|
| [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return) | Enforce `return` statements in callbacks of array methods |
| [constructor-super](https://eslint.org/docs/latest/rules/constructor-super) | Require `super()` calls in constructors |
| [curly](https://eslint.org/docs/latest/rules/curly) | Enforce consistent brace style for all control statements |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq) | Require the use of `===` and `!==` |
| [for-direction](https://eslint.org/docs/latest/rules/for-direction) | Enforce `for` loop update clause moving the counter in the right direction |
| [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor) | Disallow using an async function as a Promise executor |
| [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations) | Disallow lexical declarations in case clauses |
| [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign) | Disallow reassigning class members |
| [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero) | Disallow comparing against `-0` |
| [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign) | Disallow assignment operators in conditional expressions |
| [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign) | Disallow reassigning `const` variables |
| [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression) | Disallow expressions where the operation doesn't affect the value |
| [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition) | Disallow constant expressions in conditions |
| [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return) | Disallow returning value from constructor |
| [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex) | Disallow control characters in regular expressions |
| [no-debugger](https://eslint.org/docs/latest/rules/no-debugger) | Disallow the use of `debugger` |
| [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var) | Disallow deleting variables |
| [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members) | Disallow duplicate class members |
| [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if) | Disallow duplicate conditions in if-else-if chains |
| [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys) | Disallow duplicate keys in object literals |
| [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case) | Disallow duplicate case labels |
| [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports) | Disallow duplicate module imports |
| [no-else-return](https://eslint.org/docs/latest/rules/no-else-return) | Disallow `else` blocks after `return` statements in `if` statements |
| [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class) | Disallow empty character classes in regular expressions |
| [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern) | Disallow empty destructuring patterns |
| [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block) | Disallow empty static blocks |
| [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign) | Disallow reassigning exceptions in `catch` clauses |
| [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast) | Disallow unnecessary boolean casts |
| [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough) | Disallow fallthrough of `case` statements |
| [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign) | Disallow reassigning `function` declarations |
| [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign) | Disallow assignments to native objects or read-only global variables |
| [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp) | Disallow invalid regular expression strings in `RegExp` constructors |
| [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace) | Disallow irregular whitespace |
| [no-labels](https://eslint.org/docs/latest/rules/no-labels) | Disallow labeled statements |
| [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision) | Disallow literal numbers that lose precision |
| [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class) | Disallow characters which are made with multiple code points in character class syntax |
| [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary) | Disallow nested ternary expressions |
| [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape) | Disallow `\8` and `\9` escape sequences in string literals |
| [no-octal](https://eslint.org/docs/latest/rules/no-octal) | Disallow octal literals |
| [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign) | Disallow reassigning function parameters |
| [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return) | Disallow returning values from Promise executor functions |
| [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins) | Disallow calling some `Object.prototype` methods directly on objects |
| [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare) | Disallow variable redeclaration |
| [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces) | Disallow multiple spaces in regular expressions |
| [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign) | Disallow assignments where both sides are exactly the same |
| [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names) | Disallow identifiers from shadowing restricted names |
| [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays) | Disallow sparse arrays |
| [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string) | Disallow template literal placeholder syntax in regular strings |
| [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline) | Disallow confusing multiline expressions |
| [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition) | Disallow unmodified loop conditions |
| [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable) | Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements |
| [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop) | Disallow loops with a body that allows only one iteration |
| [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally) | Disallow control flow statements in `finally` blocks |
| [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining) | Disallow use of optional chaining in contexts where the `undefined` value is not allowed |
| [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels) | Disallow unused labels |
| [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members) | Disallow unused private class members |
| [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars) | Disallow unused variables |
| [no-useless-assignment](https://eslint.org/docs/latest/rules/no-useless-assignment) | Disallow variable assignments when the value is not used |
| [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference) | Disallow useless backreferences in regular expressions |
| [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch) | Disallow unnecessary `catch` clauses |
| [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key) | Disallow unnecessary computed property keys in objects and classes |
| [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape) | Disallow unnecessary escape characters |
| [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename) | Disallow renaming import, export, and destructured assignments to the same name |
| [no-var](https://eslint.org/docs/latest/rules/no-var) | Require `let` or `const` instead of `var` |
| [no-warning-comments](https://eslint.org/docs/latest/rules/no-warning-comments) | Disallow specified warning terms in comments |
| [no-with](https://eslint.org/docs/latest/rules/no-with) | Disallow `with` statements |
| [prefer-const](https://eslint.org/docs/latest/rules/prefer-const) | Require `const` declarations for variables that are never reassigned after declared |
| [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params) | Require rest parameters instead of `arguments` |
| [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread) | Require spread operators instead of `.apply()` |
| [require-yield](https://eslint.org/docs/latest/rules/require-yield) | Require generator functions to contain `yield` |
| [use-isnan](https://eslint.org/docs/latest/rules/use-isnan) | Require calls to `isNaN()` when checking for `NaN` |
| [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof) | Enforce comparing `typeof` expressions against valid strings |
| [@typescript-eslint/adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures) | Require that function overload signatures be consecutive |
| [@typescript-eslint/array-type](https://typescript-eslint.io/rules/array-type) | Require consistently using either `T[]` or `Array<T>` for arrays |
| [@typescript-eslint/await-thenable](https://typescript-eslint.io/rules/await-thenable) | Disallow awaiting a value that is not a Thenable |
| [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment) | Disallow `@ts-<directive>` comments or require descriptions after directives |
| [@typescript-eslint/ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment) | Disallow `// tslint:<rule-flag>` comments |
| [@typescript-eslint/class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style) | Enforce that literals on classes are exposed in a consistent style |
| [@typescript-eslint/consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors) | Enforce specifying generic type arguments on type annotation or constructor name of a constructor call |
| [@typescript-eslint/consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style) | Require or disallow the `Record` type |
| [@typescript-eslint/consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions) | Enforce consistent usage of type assertions |
| [@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions) | Enforce type definitions to consistently use either `interface` or `type` |
| [@typescript-eslint/dot-notation](https://typescript-eslint.io/rules/dot-notation) | Enforce dot notation whenever possible |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility) | Require explicit accessibility modifiers on class properties and methods |
| [@typescript-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types) | Require explicit return and argument types on exported functions' and classes' public class methods |
| [@typescript-eslint/method-signature-style](https://typescript-eslint.io/rules/method-signature-style) | Enforce using a particular method signature syntax |
| [@typescript-eslint/no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor) | Disallow generic `Array` constructors |
| [@typescript-eslint/no-array-delete](https://typescript-eslint.io/rules/no-array-delete) | Disallow using the `delete` operator on array values |
| [@typescript-eslint/no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string) | Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified |
| [@typescript-eslint/no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion) | Disallow non-null assertion in locations that may be confusing |
| [@typescript-eslint/no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression) | Require expressions of type void to appear in statement position |
| [@typescript-eslint/no-deprecated](https://typescript-eslint.io/rules/no-deprecated) | Disallow using code marked as `@deprecated` |
| [@typescript-eslint/no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values) | Disallow duplicate enum member values |
| [@typescript-eslint/no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents) | Disallow duplicate constituents of union or intersection types |
| [@typescript-eslint/no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete) | Disallow using the `delete` operator on computed key expressions |
| [@typescript-eslint/no-empty-object-type](https://typescript-eslint.io/rules/no-empty-object-type) | Disallow accidentally using the "empty object" type |
| [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any) | Disallow the `any` type |
| [@typescript-eslint/no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion) | Disallow extra non-null assertions |
| [@typescript-eslint/no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class) | Disallow classes used as namespaces |
| [@typescript-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises) | Require Promise-like statements to be handled appropriately |
| [@typescript-eslint/no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array) | Disallow iterating over an array with a for-in loop |
| [@typescript-eslint/no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval) | Disallow the use of `eval()`-like methods |
| [@typescript-eslint/no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects) | Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers |
| [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types) | Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean |
| [@typescript-eslint/no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type) | Disallow `void` type outside of generic or return types |
| [@typescript-eslint/no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator) | Disallow the `void` operator except when used to discard a value |
| [@typescript-eslint/no-misused-new](https://typescript-eslint.io/rules/no-misused-new) | Enforce valid definition of `new` and `constructor` |
| [@typescript-eslint/no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises) | Disallow Promises in places not designed to handle them |
| [@typescript-eslint/no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums) | Disallow enums from having both number and string members |
| [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace) | Disallow TypeScript namespaces |
| [@typescript-eslint/no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing) | Disallow non-null assertions in the left operand of a nullish coalescing operator |
| [@typescript-eslint/no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain) | Disallow non-null assertions after an optional chain expression |
| [@typescript-eslint/no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion) | Disallow non-null assertions using the `!` postfix operator |
| [@typescript-eslint/no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents) | Disallow members of unions and intersections that do nothing or override type information |
| [@typescript-eslint/no-require-imports](https://typescript-eslint.io/rules/no-require-imports) | Disallow invocation of `require()` |
| [@typescript-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias) | Disallow aliasing `this` |
| [@typescript-eslint/no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare) | Disallow unnecessary equality comparisons against boolean literals |
| [@typescript-eslint/no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition) | Disallow conditionals where the type is always truthy or always falsy |
| [@typescript-eslint/no-unnecessary-template-expression](https://typescript-eslint.io/rules/no-unnecessary-template-expression) | Disallow unnecessary template expressions |
| [@typescript-eslint/no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments) | Disallow type arguments that are equal to the default |
| [@typescript-eslint/no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion) | Disallow type assertions that do not change the type of an expression |
| [@typescript-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint) | Disallow unnecessary constraints on generic types |
| [@typescript-eslint/no-unnecessary-type-parameters](https://typescript-eslint.io/rules/no-unnecessary-type-parameters) | Disallow type parameters that aren't used multiple times |
| [@typescript-eslint/no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument) | Disallow calling a function with a value with type `any` |
| [@typescript-eslint/no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment) | Disallow assigning a value with type `any` to variables and properties |
| [@typescript-eslint/no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call) | Disallow calling a value with type `any` |
| [@typescript-eslint/no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging) | Disallow unsafe declaration merging |
| [@typescript-eslint/no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison) | Disallow comparing an enum value with a non-enum value |
| [@typescript-eslint/no-unsafe-function-type](https://typescript-eslint.io/rules/no-unsafe-function-type) | Disallow using the unsafe built-in Function type |
| [@typescript-eslint/no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access) | Disallow member access on a value with type `any` |
| [@typescript-eslint/no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return) | Disallow returning a value with type `any` from a function |
| [@typescript-eslint/no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus) | Require unary negation to take a number |
| [@typescript-eslint/no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions) | Disallow unused expressions |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars) | Disallow unused variables |
| [@typescript-eslint/no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor) | Disallow unnecessary constructors |
| [@typescript-eslint/no-wrapper-object-types](https://typescript-eslint.io/rules/no-wrapper-object-types) | Disallow using confusing built-in primitive class wrappers |
| [@typescript-eslint/non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style) | Enforce non-null assertions over explicit type assertions |
| [@typescript-eslint/only-throw-error](https://typescript-eslint.io/rules/only-throw-error) | Disallow throwing non-`Error` values as exceptions |
| [@typescript-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const) | Enforce the use of `as const` over literal type |
| [@typescript-eslint/prefer-find](https://typescript-eslint.io/rules/prefer-find) | Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result |
| [@typescript-eslint/prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of) | Enforce the use of `for-of` loop over the standard `for` loop where possible |
| [@typescript-eslint/prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type) | Enforce using function types instead of interfaces with call signatures |
| [@typescript-eslint/prefer-includes](https://typescript-eslint.io/rules/prefer-includes) | Enforce `includes` method over `indexOf` method |
| [@typescript-eslint/prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member) | Require all enum members to be literal values |
| [@typescript-eslint/prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword) | Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules |
| [@typescript-eslint/prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing) | Enforce using the nullish coalescing operator instead of logical assignments or chaining |
| [@typescript-eslint/prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain) | Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects |
| [@typescript-eslint/prefer-promise-reject-errors](https://typescript-eslint.io/rules/prefer-promise-reject-errors) | Require using Error objects as Promise rejection reasons |
| [@typescript-eslint/prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly) | Require private members to be marked as `readonly` if they're never modified outside of the constructor |
| [@typescript-eslint/prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter) | Enforce using type parameter when calling `Array#reduce` instead of using a type assertion |
| [@typescript-eslint/prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec) | Enforce `RegExp#exec` over `String#match` if no global flag is provided |
| [@typescript-eslint/prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type) | Enforce that `this` is used when only `this` type is returned |
| [@typescript-eslint/prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with) | Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings |
| [@typescript-eslint/require-await](https://typescript-eslint.io/rules/require-await) | Disallow async functions which do not return promises and have no `await` expression |
| [@typescript-eslint/restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands) | Require both operands of addition to be the same type and be `bigint`, `number`, or `string` |
| [@typescript-eslint/restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions) | Enforce template literal expressions to be of `string` type |
| [@typescript-eslint/return-await](https://typescript-eslint.io/rules/return-await) | Enforce consistent awaiting of returned promises |
| [@typescript-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference) | Disallow certain triple slash directives in favor of ES6-style import declarations |
| [@typescript-eslint/unbound-method](https://typescript-eslint.io/rules/unbound-method) | Enforce unbound methods are called with their expected scope |
| [@typescript-eslint/unified-signatures](https://typescript-eslint.io/rules/unified-signatures) | Disallow two overloads that could be unified into one with a union or an optional/rest parameter |
| [@typescript-eslint/use-unknown-in-catch-callback-variable](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable) | Enforce typing arguments in Promise rejection callbacks as `unknown` |
| [n/hashbang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md) | require correct usage of hashbang |
| [n/no-deprecated-api](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md) | disallow deprecated APIs |
| [n/no-exports-assign](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md) | disallow the assignment to `exports` |
| [n/no-extraneous-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md) | disallow `import` declarations which import extraneous modules |
| [n/no-extraneous-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md) | disallow `require()` expressions which import extraneous modules |
| [n/no-missing-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md) | disallow `import` declarations which import non-existence modules |
| [n/no-missing-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md) | disallow `require()` expressions which import non-existence modules |
| [n/no-process-env](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md) | disallow the use of `process.env` |
| [n/no-process-exit](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md) | disallow the use of `process.exit()` |
| [n/no-unpublished-bin](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md) | disallow `bin` files that npm ignores |
| [n/no-unpublished-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md) | disallow `import` declarations which import private modules |
| [n/no-unpublished-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md) | disallow `require()` expressions which import private modules |
| [n/no-unsupported-features/es-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md) | disallow unsupported ECMAScript built-ins on the specified version |
| [n/no-unsupported-features/es-syntax](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md) | disallow unsupported ECMAScript syntax on the specified version |
| [n/no-unsupported-features/node-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md) | disallow unsupported Node.js built-in APIs on the specified version |
| [n/process-exit-as-throw](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md) | require that `process.exit()` expressions use the same code path as `throw` |
| [unicorn/better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/better-regex.md) | Improve regexes by making them shorter, consistent, and safer. |
| [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/error-message.md) | Enforce passing a `message` value when creating a built-in error. |
| [unicorn/expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/expiring-todo-comments.md) | Add expiration conditions to TODO comments. |
| [unicorn/explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/explicit-length-check.md) | Enforce explicitly comparing the `length` or `size` property of a value. |
| [unicorn/filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/filename-case.md) | Enforce a case style for filenames. |
| [unicorn/new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/new-for-builtins.md) | Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. |
| [unicorn/no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-abusive-eslint-disable.md) | Enforce specifying rules to disable in `eslint-disable` comments. |
| [unicorn/no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-anonymous-default-export.md) | Disallow anonymous functions and classes as the default export. |
| [unicorn/no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-for-each.md) | Prefer `for…of` over the `forEach` method. |
| [unicorn/no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-reduce.md) | Disallow `Array#reduce()` and `Array#reduceRight()`. |
| [unicorn/no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-expression-member.md) | Disallow member access from await expression. |
| [unicorn/no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-in-promise-methods.md) | Disallow using `await` in `Promise` method parameters. |
| [unicorn/no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-console-spaces.md) | Do not use leading/trailing space between `console.log` parameters. |
| [unicorn/no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-document-cookie.md) | Do not use `document.cookie` directly. |
| [unicorn/no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-empty-file.md) | Disallow empty files. |
| [unicorn/no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-hex-escape.md) | Enforce the use of Unicode escapes instead of hexadecimal escapes. |
| [unicorn/no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-instanceof-array.md) | Require `Array.isArray()` instead of `instanceof Array`. |
| [unicorn/no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-remove-event-listener.md) | Prevent calling `EventTarget#removeEventListener()` with the result of an expression. |
| [unicorn/no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negated-condition.md) | Disallow negated conditions. |
| [unicorn/no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-array.md) | Disallow `new Array()`. |
| [unicorn/no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-buffer.md) | Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`. |
| [unicorn/no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-null.md) | Disallow the use of the `null` literal. |
| [unicorn/no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-object-as-default-parameter.md) | Disallow the use of objects as default parameters. |
| [unicorn/no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-process-exit.md) | Disallow `process.exit()`. |
| [unicorn/no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-single-promise-in-promise-methods.md) | Disallow passing single-element arrays to `Promise` methods. |
| [unicorn/no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-static-only-class.md) | Disallow classes that only have static members. |
| [unicorn/no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-thenable.md) | Disallow `then` property. |
| [unicorn/no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-this-assignment.md) | Disallow assigning `this` to a variable. |
| [unicorn/no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-typeof-undefined.md) | Disallow comparing `undefined` using `typeof`. |
| [unicorn/no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-await.md) | Disallow awaiting non-promise values. |
| [unicorn/no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-polyfills.md) | Enforce the use of built-in methods instead of unnecessary polyfills. |
| [unicorn/no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-array-destructuring.md) | Disallow unreadable array destructuring. |
| [unicorn/no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-iife.md) | Disallow unreadable IIFEs. |
| [unicorn/no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-fallback-in-spread.md) | Disallow useless fallback when spreading in object literals. |
| [unicorn/no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-length-check.md) | Disallow useless array length check. |
| [unicorn/no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-promise-resolve-reject.md) | Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks |
| [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-spread.md) | Disallow unnecessary spread. |
| [unicorn/no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-switch-case.md) | Disallow useless case in switch statements. |
| [unicorn/no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-undefined.md) | Disallow useless `undefined`. |
| [unicorn/no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-zero-fractions.md) | Disallow number literals with zero fractions or dangling dots. |
| [unicorn/prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-add-event-listener.md) | Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions. |
| [unicorn/prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat.md) | Prefer `Array#flat()` over legacy techniques to flatten arrays. |
| [unicorn/prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat-map.md) | Prefer `.flatMap(…)` over `.map(…).flat()`. |
| [unicorn/prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-index-of.md) | Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item. |
| [unicorn/prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-some.md) | Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`. |
| [unicorn/prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-at.md) | Prefer `.at()` method for index access and `String#charAt()`. |
| [unicorn/prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-blob-reading-methods.md) | Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`. |
| [unicorn/prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-code-point.md) | Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`. |
| [unicorn/prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-date-now.md) | Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch. |
| [unicorn/prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-default-parameters.md) | Prefer default parameters over reassignment. |
| [unicorn/prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-append.md) | Prefer `Node#append()` over `Node#appendChild()`. |
| [unicorn/prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-dataset.md) | Prefer using `.dataset` on DOM elements over calling attribute methods. |
| [unicorn/prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-remove.md) | Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`. |
| [unicorn/prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-text-content.md) | Prefer `.textContent` over `.innerText`. |
| [unicorn/prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-event-target.md) | Prefer `EventTarget` over `EventEmitter`. |
| [unicorn/prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-export-from.md) | Prefer `export…from` when re-exporting. |
| [unicorn/prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-keyboard-event-key.md) | Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`. |
| [unicorn/prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-logical-operator-over-ternary.md) | Prefer using a logical operator over a ternary. |
| [unicorn/prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-trunc.md) | Enforce the use of `Math.trunc` instead of bitwise operators. |
| [unicorn/prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-dom-apis.md) | Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`. |
| [unicorn/prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-math-apis.md) | Prefer modern `Math` APIs over legacy patterns. |
| [unicorn/prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md) | Prefer JavaScript modules (ESM) over CommonJS. |
| [unicorn/prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-native-coercion-functions.md) | Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly. |
| [unicorn/prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-negative-index.md) | Prefer negative index over `.length - index` when possible. |
| [unicorn/prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-node-protocol.md) | Prefer using the `node:` protocol when importing Node.js builtin modules. |
| [unicorn/prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-number-properties.md) | Prefer `Number` static properties over global ones. |
| [unicorn/prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-object-from-entries.md) | Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object. |
| [unicorn/prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-prototype-methods.md) | Prefer borrowing methods from the prototype instead of the instance. |
| [unicorn/prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-query-selector.md) | Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`. |
| [unicorn/prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-reflect-apply.md) | Prefer `Reflect.apply()` over `Function#apply()`. |
| [unicorn/prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-regexp-test.md) | Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`. |
| [unicorn/prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-size.md) | Prefer using `Set#size` instead of `Array#length`. |
| [unicorn/prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-replace-all.md) | Prefer `String#replaceAll()` over regex searches with the global flag. |
| [unicorn/prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-slice.md) | Prefer `String#slice()` over `String#substr()` and `String#substring()`. |
| [unicorn/prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-trim-start-end.md) | Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`. |
| [unicorn/prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-top-level-await.md) | Prefer top-level await over top-level promises and async function calls. |
| [unicorn/prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-type-error.md) | Enforce throwing `TypeError` in type checking conditions. |
| [unicorn/relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/relative-url-style.md) | Enforce consistent relative URL style. |
| [unicorn/require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-array-join-separator.md) | Enforce using the separator argument with `Array#join()`. |
| [unicorn/require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-number-to-fixed-digits-argument.md) | Enforce using the digits argument with `Number#toFixed()`. |
| [unicorn/throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/throw-new-error.md) | Require `new` when creating an error. |


## Config ts-relaxed-any
    
| Rule | Description |
|---|---|


## All Rules

| Rule | Description | Configs |
|---|---|---|
| [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs) | Enforce getter and setter pairs in objects and classes |  |
| [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return) | Enforce `return` statements in callbacks of array methods | [js](#config-js), [ts](#config-ts) |
| [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style) | Require braces around arrow function bodies |  |
| [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var) | Enforce the use of variables within the scope they are defined |  |
| [camelcase](https://eslint.org/docs/latest/rules/camelcase) | Enforce camelcase naming convention |  |
| [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments) | Enforce or disallow capitalization of the first letter of a comment |  |
| [class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this) | Enforce that class methods utilize `this` |  |
| [complexity](https://eslint.org/docs/latest/rules/complexity) | Enforce a maximum cyclomatic complexity allowed in a program |  |
| [consistent-return](https://eslint.org/docs/latest/rules/consistent-return) | Require `return` statements to either always or never specify values |  |
| [consistent-this](https://eslint.org/docs/latest/rules/consistent-this) | Enforce consistent naming when capturing the current execution context |  |
| [constructor-super](https://eslint.org/docs/latest/rules/constructor-super) | Require `super()` calls in constructors | [js](#config-js), [ts](#config-ts) |
| [curly](https://eslint.org/docs/latest/rules/curly) | Enforce consistent brace style for all control statements | [js](#config-js), [ts](#config-ts) |
| [default-case](https://eslint.org/docs/latest/rules/default-case) | Require `default` cases in `switch` statements |  |
| [default-case-last](https://eslint.org/docs/latest/rules/default-case-last) | Enforce `default` clauses in `switch` statements to be last |  |
| [default-param-last](https://eslint.org/docs/latest/rules/default-param-last) | Enforce default parameters to be last |  |
| [dot-notation](https://eslint.org/docs/latest/rules/dot-notation) | Enforce dot notation whenever possible |  |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq) | Require the use of `===` and `!==` | [js](#config-js), [ts](#config-ts) |
| [for-direction](https://eslint.org/docs/latest/rules/for-direction) | Enforce `for` loop update clause moving the counter in the right direction | [js](#config-js), [ts](#config-ts) |
| [func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching) | Require function names to match the name of the variable or property to which they are assigned |  |
| [func-names](https://eslint.org/docs/latest/rules/func-names) | Require or disallow named `function` expressions |  |
| [func-style](https://eslint.org/docs/latest/rules/func-style) | Enforce the consistent use of either `function` declarations or expressions assigned to variables |  |
| [getter-return](https://eslint.org/docs/latest/rules/getter-return) | Enforce `return` statements in getters | [js](#config-js) |
| [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs) | Require grouped accessor pairs in object literals and classes |  |
| [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in) | Require `for-in` loops to include an `if` statement |  |
| [id-denylist](https://eslint.org/docs/latest/rules/id-denylist) | Disallow specified identifiers |  |
| [id-length](https://eslint.org/docs/latest/rules/id-length) | Enforce minimum and maximum identifier lengths |  |
| [id-match](https://eslint.org/docs/latest/rules/id-match) | Require identifiers to match a specified regular expression |  |
| [init-declarations](https://eslint.org/docs/latest/rules/init-declarations) | Require or disallow initialization in variable declarations |  |
| [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators) | Require or disallow logical assignment operator shorthand |  |
| [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file) | Enforce a maximum number of classes per file |  |
| [max-depth](https://eslint.org/docs/latest/rules/max-depth) | Enforce a maximum depth that blocks can be nested |  |
| [max-lines](https://eslint.org/docs/latest/rules/max-lines) | Enforce a maximum number of lines per file |  |
| [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function) | Enforce a maximum number of lines of code in a function |  |
| [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks) | Enforce a maximum depth that callbacks can be nested |  |
| [max-params](https://eslint.org/docs/latest/rules/max-params) | Enforce a maximum number of parameters in function definitions |  |
| [max-statements](https://eslint.org/docs/latest/rules/max-statements) | Enforce a maximum number of statements allowed in function blocks |  |
| [new-cap](https://eslint.org/docs/latest/rules/new-cap) | Require constructor names to begin with a capital letter |  |
| [no-alert](https://eslint.org/docs/latest/rules/no-alert) | Disallow the use of `alert`, `confirm`, and `prompt` |  |
| [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor) | Disallow `Array` constructors |  |
| [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor) | Disallow using an async function as a Promise executor | [js](#config-js), [ts](#config-ts) |
| [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop) | Disallow `await` inside of loops |  |
| [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise) | Disallow bitwise operators |  |
| [no-caller](https://eslint.org/docs/latest/rules/no-caller) | Disallow the use of `arguments.caller` or `arguments.callee` |  |
| [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations) | Disallow lexical declarations in case clauses | [js](#config-js), [ts](#config-ts) |
| [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign) | Disallow reassigning class members | [js](#config-js), [ts](#config-ts) |
| [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero) | Disallow comparing against `-0` | [js](#config-js), [ts](#config-ts) |
| [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign) | Disallow assignment operators in conditional expressions | [js](#config-js), [ts](#config-ts) |
| [no-console](https://eslint.org/docs/latest/rules/no-console) | Disallow the use of `console` |  |
| [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign) | Disallow reassigning `const` variables | [js](#config-js), [ts](#config-ts) |
| [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression) | Disallow expressions where the operation doesn't affect the value | [js](#config-js), [ts](#config-ts) |
| [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition) | Disallow constant expressions in conditions | [js](#config-js), [ts](#config-ts) |
| [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return) | Disallow returning value from constructor | [js](#config-js), [ts](#config-ts) |
| [no-continue](https://eslint.org/docs/latest/rules/no-continue) | Disallow `continue` statements |  |
| [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex) | Disallow control characters in regular expressions | [js](#config-js), [ts](#config-ts) |
| [no-debugger](https://eslint.org/docs/latest/rules/no-debugger) | Disallow the use of `debugger` | [js](#config-js), [ts](#config-ts) |
| [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var) | Disallow deleting variables | [js](#config-js), [ts](#config-ts) |
| [no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex) | Disallow equal signs explicitly at the beginning of regular expressions |  |
| [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args) | Disallow duplicate arguments in `function` definitions | [js](#config-js) |
| [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members) | Disallow duplicate class members | [js](#config-js), [ts](#config-ts) |
| [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if) | Disallow duplicate conditions in if-else-if chains | [js](#config-js), [ts](#config-ts) |
| [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys) | Disallow duplicate keys in object literals | [js](#config-js), [ts](#config-ts) |
| [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case) | Disallow duplicate case labels | [js](#config-js), [ts](#config-ts) |
| [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports) | Disallow duplicate module imports | [js](#config-js), [ts](#config-ts) |
| [no-else-return](https://eslint.org/docs/latest/rules/no-else-return) | Disallow `else` blocks after `return` statements in `if` statements | [js](#config-js), [ts](#config-ts) |
| [no-empty](https://eslint.org/docs/latest/rules/no-empty) | Disallow empty block statements |  |
| [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class) | Disallow empty character classes in regular expressions | [js](#config-js), [ts](#config-ts) |
| [no-empty-function](https://eslint.org/docs/latest/rules/no-empty-function) | Disallow empty functions |  |
| [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern) | Disallow empty destructuring patterns | [js](#config-js), [ts](#config-ts) |
| [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block) | Disallow empty static blocks | [js](#config-js), [ts](#config-ts) |
| [no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null) | Disallow `null` comparisons without type-checking operators |  |
| [no-eval](https://eslint.org/docs/latest/rules/no-eval) | Disallow the use of `eval()` |  |
| [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign) | Disallow reassigning exceptions in `catch` clauses | [js](#config-js), [ts](#config-ts) |
| [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native) | Disallow extending native types |  |
| [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind) | Disallow unnecessary calls to `.bind()` |  |
| [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast) | Disallow unnecessary boolean casts | [js](#config-js), [ts](#config-ts) |
| [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label) | Disallow unnecessary labels |  |
| [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough) | Disallow fallthrough of `case` statements | [js](#config-js), [ts](#config-ts) |
| [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign) | Disallow reassigning `function` declarations | [js](#config-js), [ts](#config-ts) |
| [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign) | Disallow assignments to native objects or read-only global variables | [js](#config-js), [ts](#config-ts) |
| [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion) | Disallow shorthand type conversions |  |
| [no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals) | Disallow declarations in the global scope |  |
| [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval) | Disallow the use of `eval()`-like methods |  |
| [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign) | Disallow assigning to imported bindings | [js](#config-js) |
| [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments) | Disallow inline comments after code |  |
| [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations) | Disallow variable or `function` declarations in nested blocks |  |
| [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp) | Disallow invalid regular expression strings in `RegExp` constructors | [js](#config-js), [ts](#config-ts) |
| [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this) | Disallow use of `this` in contexts where the value of `this` is `undefined` |  |
| [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace) | Disallow irregular whitespace | [js](#config-js), [ts](#config-ts) |
| [no-iterator](https://eslint.org/docs/latest/rules/no-iterator) | Disallow the use of the `__iterator__` property |  |
| [no-label-var](https://eslint.org/docs/latest/rules/no-label-var) | Disallow labels that share a name with a variable |  |
| [no-labels](https://eslint.org/docs/latest/rules/no-labels) | Disallow labeled statements | [js](#config-js), [ts](#config-ts) |
| [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks) | Disallow unnecessary nested blocks |  |
| [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if) | Disallow `if` statements as the only statement in `else` blocks |  |
| [no-loop-func](https://eslint.org/docs/latest/rules/no-loop-func) | Disallow function declarations that contain unsafe references inside loop statements |  |
| [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision) | Disallow literal numbers that lose precision | [js](#config-js), [ts](#config-ts) |
| [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers) | Disallow magic numbers |  |
| [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class) | Disallow characters which are made with multiple code points in character class syntax | [js](#config-js), [ts](#config-ts) |
| [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign) | Disallow use of chained assignment expressions |  |
| [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str) | Disallow multiline strings |  |
| [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition) | Disallow negated conditions |  |
| [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary) | Disallow nested ternary expressions | [js](#config-js), [ts](#config-ts) |
| [no-new](https://eslint.org/docs/latest/rules/no-new) | Disallow `new` operators outside of assignments or comparisons |  |
| [no-new-func](https://eslint.org/docs/latest/rules/no-new-func) | Disallow `new` operators with the `Function` object |  |
| [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor) | Disallow `new` operators with global non-constructor functions | [js](#config-js) |
| [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers) | Disallow `new` operators with the `String`, `Number`, and `Boolean` objects |  |
| [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape) | Disallow `\8` and `\9` escape sequences in string literals | [js](#config-js), [ts](#config-ts) |
| [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls) | Disallow calling global object properties as functions | [js](#config-js) |
| [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor) | Disallow calls to the `Object` constructor without an argument |  |
| [no-octal](https://eslint.org/docs/latest/rules/no-octal) | Disallow octal literals | [js](#config-js), [ts](#config-ts) |
| [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape) | Disallow octal escape sequences in string literals |  |
| [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign) | Disallow reassigning function parameters | [js](#config-js), [ts](#config-ts) |
| [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus) | Disallow the unary operators `++` and `--` |  |
| [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return) | Disallow returning values from Promise executor functions | [js](#config-js), [ts](#config-ts) |
| [no-proto](https://eslint.org/docs/latest/rules/no-proto) | Disallow the use of the `__proto__` property |  |
| [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins) | Disallow calling some `Object.prototype` methods directly on objects | [js](#config-js), [ts](#config-ts) |
| [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare) | Disallow variable redeclaration | [js](#config-js), [ts](#config-ts) |
| [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces) | Disallow multiple spaces in regular expressions | [js](#config-js), [ts](#config-ts) |
| [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports) | Disallow specified names in exports |  |
| [no-restricted-globals](https://eslint.org/docs/latest/rules/no-restricted-globals) | Disallow specified global variables |  |
| [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports) | Disallow specified modules when loaded by `import` |  |
| [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties) | Disallow certain properties on certain objects |  |
| [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax) | Disallow specified syntax |  |
| [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign) | Disallow assignment operators in `return` statements |  |
| [no-script-url](https://eslint.org/docs/latest/rules/no-script-url) | Disallow `javascript:` URLs |  |
| [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign) | Disallow assignments where both sides are exactly the same | [js](#config-js), [ts](#config-ts) |
| [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare) | Disallow comparisons where both sides are exactly the same |  |
| [no-sequences](https://eslint.org/docs/latest/rules/no-sequences) | Disallow comma operators |  |
| [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return) | Disallow returning values from setters | [js](#config-js) |
| [no-shadow](https://eslint.org/docs/latest/rules/no-shadow) | Disallow variable declarations from shadowing variables declared in the outer scope |  |
| [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names) | Disallow identifiers from shadowing restricted names | [js](#config-js), [ts](#config-ts) |
| [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays) | Disallow sparse arrays | [js](#config-js), [ts](#config-ts) |
| [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string) | Disallow template literal placeholder syntax in regular strings | [js](#config-js), [ts](#config-ts) |
| [no-ternary](https://eslint.org/docs/latest/rules/no-ternary) | Disallow ternary operators |  |
| [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super) | Disallow `this`/`super` before calling `super()` in constructors | [js](#config-js) |
| [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal) | Disallow throwing literals as exceptions |  |
| [no-undef](https://eslint.org/docs/latest/rules/no-undef) | Disallow the use of undeclared variables unless mentioned in `/*global */` comments | [js](#config-js) |
| [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init) | Disallow initializing variables to `undefined` |  |
| [no-undefined](https://eslint.org/docs/latest/rules/no-undefined) | Disallow the use of `undefined` as an identifier |  |
| [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle) | Disallow dangling underscores in identifiers |  |
| [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline) | Disallow confusing multiline expressions | [js](#config-js), [ts](#config-ts) |
| [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition) | Disallow unmodified loop conditions | [js](#config-js), [ts](#config-ts) |
| [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary) | Disallow ternary operators when simpler alternatives exist |  |
| [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable) | Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements | [js](#config-js), [ts](#config-ts) |
| [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop) | Disallow loops with a body that allows only one iteration | [js](#config-js), [ts](#config-ts) |
| [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally) | Disallow control flow statements in `finally` blocks | [js](#config-js), [ts](#config-ts) |
| [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation) | Disallow negating the left operand of relational operators | [js](#config-js) |
| [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining) | Disallow use of optional chaining in contexts where the `undefined` value is not allowed | [js](#config-js), [ts](#config-ts) |
| [no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions) | Disallow unused expressions | [js](#config-js) |
| [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels) | Disallow unused labels | [js](#config-js), [ts](#config-ts) |
| [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members) | Disallow unused private class members | [js](#config-js), [ts](#config-ts) |
| [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars) | Disallow unused variables | [js](#config-js), [ts](#config-ts) |
| [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define) | Disallow the use of variables before they are defined |  |
| [no-useless-assignment](https://eslint.org/docs/latest/rules/no-useless-assignment) | Disallow variable assignments when the value is not used | [js](#config-js), [ts](#config-ts) |
| [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference) | Disallow useless backreferences in regular expressions | [js](#config-js), [ts](#config-ts) |
| [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call) | Disallow unnecessary calls to `.call()` and `.apply()` |  |
| [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch) | Disallow unnecessary `catch` clauses | [js](#config-js), [ts](#config-ts) |
| [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key) | Disallow unnecessary computed property keys in objects and classes | [js](#config-js), [ts](#config-ts) |
| [no-useless-concat](https://eslint.org/docs/latest/rules/no-useless-concat) | Disallow unnecessary concatenation of literals or template literals |  |
| [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor) | Disallow unnecessary constructors |  |
| [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape) | Disallow unnecessary escape characters | [js](#config-js), [ts](#config-ts) |
| [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename) | Disallow renaming import, export, and destructured assignments to the same name | [js](#config-js), [ts](#config-ts) |
| [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return) | Disallow redundant return statements |  |
| [no-var](https://eslint.org/docs/latest/rules/no-var) | Require `let` or `const` instead of `var` | [js](#config-js), [ts](#config-ts) |
| [no-void](https://eslint.org/docs/latest/rules/no-void) | Disallow `void` operators |  |
| [no-warning-comments](https://eslint.org/docs/latest/rules/no-warning-comments) | Disallow specified warning terms in comments | [js](#config-js), [ts](#config-ts) |
| [no-with](https://eslint.org/docs/latest/rules/no-with) | Disallow `with` statements | [js](#config-js), [ts](#config-ts) |
| [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand) | Require or disallow method and property shorthand syntax for object literals |  |
| [one-var](https://eslint.org/docs/latest/rules/one-var) | Enforce variables to be declared either together or separately in functions |  |
| [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment) | Require or disallow assignment operator shorthand where possible |  |
| [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback) | Require using arrow functions for callbacks |  |
| [prefer-const](https://eslint.org/docs/latest/rules/prefer-const) | Require `const` declarations for variables that are never reassigned after declared | [js](#config-js), [ts](#config-ts) |
| [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring) | Require destructuring from arrays and/or objects |  |
| [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator) | Disallow the use of `Math.pow` in favor of the `**` operator |  |
| [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group) | Enforce using named capture group in regular expression |  |
| [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals) | Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals |  |
| [prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own) | Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()` |  |
| [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread) | Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead |  |
| [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors) | Require using Error objects as Promise rejection reasons |  |
| [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals) | Disallow use of the `RegExp` constructor in favor of regular expression literals |  |
| [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params) | Require rest parameters instead of `arguments` | [js](#config-js), [ts](#config-ts) |
| [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread) | Require spread operators instead of `.apply()` | [js](#config-js), [ts](#config-ts) |
| [prefer-template](https://eslint.org/docs/latest/rules/prefer-template) | Require template literals instead of string concatenation |  |
| [radix](https://eslint.org/docs/latest/rules/radix) | Enforce the consistent use of the radix argument when using `parseInt()` |  |
| [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates) | Disallow assignments that can lead to race conditions due to usage of `await` or `yield` |  |
| [require-await](https://eslint.org/docs/latest/rules/require-await) | Disallow async functions which have no `await` expression |  |
| [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp) | Enforce the use of `u` or `v` flag on regular expressions |  |
| [require-yield](https://eslint.org/docs/latest/rules/require-yield) | Require generator functions to contain `yield` | [js](#config-js), [ts](#config-ts) |
| [sort-imports](https://eslint.org/docs/latest/rules/sort-imports) | Enforce sorted `import` declarations within modules |  |
| [sort-keys](https://eslint.org/docs/latest/rules/sort-keys) | Require object keys to be sorted |  |
| [sort-vars](https://eslint.org/docs/latest/rules/sort-vars) | Require variables within the same declaration block to be sorted |  |
| [strict](https://eslint.org/docs/latest/rules/strict) | Require or disallow strict mode directives |  |
| [symbol-description](https://eslint.org/docs/latest/rules/symbol-description) | Require symbol descriptions |  |
| [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom) | Require or disallow Unicode byte order mark (BOM) |  |
| [use-isnan](https://eslint.org/docs/latest/rules/use-isnan) | Require calls to `isNaN()` when checking for `NaN` | [js](#config-js), [ts](#config-ts) |
| [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof) | Enforce comparing `typeof` expressions against valid strings | [js](#config-js), [ts](#config-ts) |
| [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top) | Require `var` declarations be placed at the top of their containing scope |  |
| [yoda](https://eslint.org/docs/latest/rules/yoda) | Require or disallow "Yoda" conditions |  |
| [@typescript-eslint/adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures) | Require that function overload signatures be consecutive | [ts](#config-ts) |
| [@typescript-eslint/array-type](https://typescript-eslint.io/rules/array-type) | Require consistently using either `T[]` or `Array<T>` for arrays | [ts](#config-ts) |
| [@typescript-eslint/await-thenable](https://typescript-eslint.io/rules/await-thenable) | Disallow awaiting a value that is not a Thenable | [ts](#config-ts) |
| [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment) | Disallow `@ts-<directive>` comments or require descriptions after directives | [ts](#config-ts) |
| [@typescript-eslint/ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment) | Disallow `// tslint:<rule-flag>` comments | [ts](#config-ts) |
| [@typescript-eslint/class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style) | Enforce that literals on classes are exposed in a consistent style | [ts](#config-ts) |
| [@typescript-eslint/class-methods-use-this](https://typescript-eslint.io/rules/class-methods-use-this) | Enforce that class methods utilize `this` |  |
| [@typescript-eslint/consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors) | Enforce specifying generic type arguments on type annotation or constructor name of a constructor call | [ts](#config-ts) |
| [@typescript-eslint/consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style) | Require or disallow the `Record` type | [ts](#config-ts) |
| [@typescript-eslint/consistent-return](https://typescript-eslint.io/rules/consistent-return) | Require `return` statements to either always or never specify values |  |
| [@typescript-eslint/consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions) | Enforce consistent usage of type assertions | [ts](#config-ts) |
| [@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions) | Enforce type definitions to consistently use either `interface` or `type` | [ts](#config-ts) |
| [@typescript-eslint/consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports) | Enforce consistent usage of type exports |  |
| [@typescript-eslint/consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports) | Enforce consistent usage of type imports |  |
| [@typescript-eslint/default-param-last](https://typescript-eslint.io/rules/default-param-last) | Enforce default parameters to be last |  |
| [@typescript-eslint/dot-notation](https://typescript-eslint.io/rules/dot-notation) | Enforce dot notation whenever possible | [ts](#config-ts) |
| [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type) | Require explicit return types on functions and class methods |  |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility) | Require explicit accessibility modifiers on class properties and methods | [ts](#config-ts) |
| [@typescript-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types) | Require explicit return and argument types on exported functions' and classes' public class methods | [ts](#config-ts) |
| [@typescript-eslint/init-declarations](https://typescript-eslint.io/rules/init-declarations) | Require or disallow initialization in variable declarations |  |
| [@typescript-eslint/max-params](https://typescript-eslint.io/rules/max-params) | Enforce a maximum number of parameters in function definitions |  |
| [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering) | Require a consistent member declaration order |  |
| [@typescript-eslint/method-signature-style](https://typescript-eslint.io/rules/method-signature-style) | Enforce using a particular method signature syntax | [ts](#config-ts) |
| [@typescript-eslint/naming-convention](https://typescript-eslint.io/rules/naming-convention) | Enforce naming conventions for everything across a codebase |  |
| [@typescript-eslint/no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor) | Disallow generic `Array` constructors | [ts](#config-ts) |
| [@typescript-eslint/no-array-delete](https://typescript-eslint.io/rules/no-array-delete) | Disallow using the `delete` operator on array values | [ts](#config-ts) |
| [@typescript-eslint/no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string) | Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified | [ts](#config-ts) |
| [@typescript-eslint/no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion) | Disallow non-null assertion in locations that may be confusing | [ts](#config-ts) |
| [@typescript-eslint/no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression) | Require expressions of type void to appear in statement position | [ts](#config-ts) |
| [@typescript-eslint/no-deprecated](https://typescript-eslint.io/rules/no-deprecated) | Disallow using code marked as `@deprecated` | [ts](#config-ts) |
| [@typescript-eslint/no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members) | Disallow duplicate class members |  |
| [@typescript-eslint/no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values) | Disallow duplicate enum member values | [ts](#config-ts) |
| [@typescript-eslint/no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents) | Disallow duplicate constituents of union or intersection types | [ts](#config-ts) |
| [@typescript-eslint/no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete) | Disallow using the `delete` operator on computed key expressions | [ts](#config-ts) |
| [@typescript-eslint/no-empty-function](https://typescript-eslint.io/rules/no-empty-function) | Disallow empty functions |  |
| [@typescript-eslint/no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface) | Disallow the declaration of empty interfaces |  |
| [@typescript-eslint/no-empty-object-type](https://typescript-eslint.io/rules/no-empty-object-type) | Disallow accidentally using the "empty object" type | [ts](#config-ts) |
| [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any) | Disallow the `any` type | [ts](#config-ts) |
| [@typescript-eslint/no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion) | Disallow extra non-null assertions | [ts](#config-ts) |
| [@typescript-eslint/no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class) | Disallow classes used as namespaces | [ts](#config-ts) |
| [@typescript-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises) | Require Promise-like statements to be handled appropriately | [ts](#config-ts) |
| [@typescript-eslint/no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array) | Disallow iterating over an array with a for-in loop | [ts](#config-ts) |
| [@typescript-eslint/no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval) | Disallow the use of `eval()`-like methods | [ts](#config-ts) |
| [@typescript-eslint/no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects) | Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers | [ts](#config-ts) |
| [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types) | Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean | [ts](#config-ts) |
| [@typescript-eslint/no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this) | Disallow `this` keywords outside of classes or class-like objects |  |
| [@typescript-eslint/no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type) | Disallow `void` type outside of generic or return types | [ts](#config-ts) |
| [@typescript-eslint/no-loop-func](https://typescript-eslint.io/rules/no-loop-func) | Disallow function declarations that contain unsafe references inside loop statements |  |
| [@typescript-eslint/no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision) | Disallow literal numbers that lose precision |  |
| [@typescript-eslint/no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers) | Disallow magic numbers |  |
| [@typescript-eslint/no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator) | Disallow the `void` operator except when used to discard a value | [ts](#config-ts) |
| [@typescript-eslint/no-misused-new](https://typescript-eslint.io/rules/no-misused-new) | Enforce valid definition of `new` and `constructor` | [ts](#config-ts) |
| [@typescript-eslint/no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises) | Disallow Promises in places not designed to handle them | [ts](#config-ts) |
| [@typescript-eslint/no-misused-spread](https://typescript-eslint.io/rules/no-misused-spread) | Disallow using the spread operator when it might cause unexpected behavior |  |
| [@typescript-eslint/no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums) | Disallow enums from having both number and string members | [ts](#config-ts) |
| [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace) | Disallow TypeScript namespaces | [ts](#config-ts) |
| [@typescript-eslint/no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing) | Disallow non-null assertions in the left operand of a nullish coalescing operator | [ts](#config-ts) |
| [@typescript-eslint/no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain) | Disallow non-null assertions after an optional chain expression | [ts](#config-ts) |
| [@typescript-eslint/no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion) | Disallow non-null assertions using the `!` postfix operator | [ts](#config-ts) |
| [@typescript-eslint/no-redeclare](https://typescript-eslint.io/rules/no-redeclare) | Disallow variable redeclaration |  |
| [@typescript-eslint/no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents) | Disallow members of unions and intersections that do nothing or override type information | [ts](#config-ts) |
| [@typescript-eslint/no-require-imports](https://typescript-eslint.io/rules/no-require-imports) | Disallow invocation of `require()` | [ts](#config-ts) |
| [@typescript-eslint/no-restricted-imports](https://typescript-eslint.io/rules/no-restricted-imports) | Disallow specified modules when loaded by `import` |  |
| [@typescript-eslint/no-restricted-types](https://typescript-eslint.io/rules/no-restricted-types) | Disallow certain types |  |
| [@typescript-eslint/no-shadow](https://typescript-eslint.io/rules/no-shadow) | Disallow variable declarations from shadowing variables declared in the outer scope |  |
| [@typescript-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias) | Disallow aliasing `this` | [ts](#config-ts) |
| [@typescript-eslint/no-type-alias](https://typescript-eslint.io/rules/no-type-alias) | Disallow type aliases |  |
| [@typescript-eslint/no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare) | Disallow unnecessary equality comparisons against boolean literals | [ts](#config-ts) |
| [@typescript-eslint/no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition) | Disallow conditionals where the type is always truthy or always falsy | [ts](#config-ts) |
| [@typescript-eslint/no-unnecessary-parameter-property-assignment](https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment) | Disallow unnecessary assignment of constructor property parameter |  |
| [@typescript-eslint/no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier) | Disallow unnecessary namespace qualifiers |  |
| [@typescript-eslint/no-unnecessary-template-expression](https://typescript-eslint.io/rules/no-unnecessary-template-expression) | Disallow unnecessary template expressions | [ts](#config-ts) |
| [@typescript-eslint/no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments) | Disallow type arguments that are equal to the default | [ts](#config-ts) |
| [@typescript-eslint/no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion) | Disallow type assertions that do not change the type of an expression | [ts](#config-ts) |
| [@typescript-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint) | Disallow unnecessary constraints on generic types | [ts](#config-ts) |
| [@typescript-eslint/no-unnecessary-type-parameters](https://typescript-eslint.io/rules/no-unnecessary-type-parameters) | Disallow type parameters that aren't used multiple times | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument) | Disallow calling a function with a value with type `any` | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment) | Disallow assigning a value with type `any` to variables and properties | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call) | Disallow calling a value with type `any` | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging) | Disallow unsafe declaration merging | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison) | Disallow comparing an enum value with a non-enum value | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-function-type](https://typescript-eslint.io/rules/no-unsafe-function-type) | Disallow using the unsafe built-in Function type | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access) | Disallow member access on a value with type `any` | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return) | Disallow returning a value with type `any` from a function | [ts](#config-ts) |
| [@typescript-eslint/no-unsafe-type-assertion](https://typescript-eslint.io/rules/no-unsafe-type-assertion) | Disallow type assertions that narrow a type |  |
| [@typescript-eslint/no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus) | Require unary negation to take a number | [ts](#config-ts) |
| [@typescript-eslint/no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions) | Disallow unused expressions | [ts](#config-ts) |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars) | Disallow unused variables | [ts](#config-ts) |
| [@typescript-eslint/no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define) | Disallow the use of variables before they are defined |  |
| [@typescript-eslint/no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor) | Disallow unnecessary constructors | [ts](#config-ts) |
| [@typescript-eslint/no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export) | Disallow empty exports that don't change anything in a module file |  |
| [@typescript-eslint/no-var-requires](https://typescript-eslint.io/rules/no-var-requires) | Disallow `require` statements except in import statements |  |
| [@typescript-eslint/no-wrapper-object-types](https://typescript-eslint.io/rules/no-wrapper-object-types) | Disallow using confusing built-in primitive class wrappers | [ts](#config-ts) |
| [@typescript-eslint/non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style) | Enforce non-null assertions over explicit type assertions | [ts](#config-ts) |
| [@typescript-eslint/only-throw-error](https://typescript-eslint.io/rules/only-throw-error) | Disallow throwing non-`Error` values as exceptions | [ts](#config-ts) |
| [@typescript-eslint/parameter-properties](https://typescript-eslint.io/rules/parameter-properties) | Require or disallow parameter properties in class constructors |  |
| [@typescript-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const) | Enforce the use of `as const` over literal type | [ts](#config-ts) |
| [@typescript-eslint/prefer-destructuring](https://typescript-eslint.io/rules/prefer-destructuring) | Require destructuring from arrays and/or objects |  |
| [@typescript-eslint/prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers) | Require each enum member value to be explicitly initialized |  |
| [@typescript-eslint/prefer-find](https://typescript-eslint.io/rules/prefer-find) | Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result | [ts](#config-ts) |
| [@typescript-eslint/prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of) | Enforce the use of `for-of` loop over the standard `for` loop where possible | [ts](#config-ts) |
| [@typescript-eslint/prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type) | Enforce using function types instead of interfaces with call signatures | [ts](#config-ts) |
| [@typescript-eslint/prefer-includes](https://typescript-eslint.io/rules/prefer-includes) | Enforce `includes` method over `indexOf` method | [ts](#config-ts) |
| [@typescript-eslint/prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member) | Require all enum members to be literal values | [ts](#config-ts) |
| [@typescript-eslint/prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword) | Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules | [ts](#config-ts) |
| [@typescript-eslint/prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing) | Enforce using the nullish coalescing operator instead of logical assignments or chaining | [ts](#config-ts) |
| [@typescript-eslint/prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain) | Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects | [ts](#config-ts) |
| [@typescript-eslint/prefer-promise-reject-errors](https://typescript-eslint.io/rules/prefer-promise-reject-errors) | Require using Error objects as Promise rejection reasons | [ts](#config-ts) |
| [@typescript-eslint/prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly) | Require private members to be marked as `readonly` if they're never modified outside of the constructor | [ts](#config-ts) |
| [@typescript-eslint/prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types) | Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs |  |
| [@typescript-eslint/prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter) | Enforce using type parameter when calling `Array#reduce` instead of using a type assertion | [ts](#config-ts) |
| [@typescript-eslint/prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec) | Enforce `RegExp#exec` over `String#match` if no global flag is provided | [ts](#config-ts) |
| [@typescript-eslint/prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type) | Enforce that `this` is used when only `this` type is returned | [ts](#config-ts) |
| [@typescript-eslint/prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with) | Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings | [ts](#config-ts) |
| [@typescript-eslint/prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error) | Enforce using `@ts-expect-error` over `@ts-ignore` |  |
| [@typescript-eslint/promise-function-async](https://typescript-eslint.io/rules/promise-function-async) | Require any function or method that returns a Promise to be marked async |  |
| [@typescript-eslint/related-getter-setter-pairs](https://typescript-eslint.io/rules/related-getter-setter-pairs) | Enforce that `get()` types should be assignable to their equivalent `set()` type |  |
| [@typescript-eslint/require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare) | Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction` |  |
| [@typescript-eslint/require-await](https://typescript-eslint.io/rules/require-await) | Disallow async functions which do not return promises and have no `await` expression | [ts](#config-ts) |
| [@typescript-eslint/restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands) | Require both operands of addition to be the same type and be `bigint`, `number`, or `string` | [ts](#config-ts) |
| [@typescript-eslint/restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions) | Enforce template literal expressions to be of `string` type | [ts](#config-ts) |
| [@typescript-eslint/return-await](https://typescript-eslint.io/rules/return-await) | Enforce consistent awaiting of returned promises | [ts](#config-ts) |
| [@typescript-eslint/sort-type-constituents](https://typescript-eslint.io/rules/sort-type-constituents) | Enforce constituents of a type union/intersection to be sorted alphabetically |  |
| [@typescript-eslint/strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions) | Disallow certain types in boolean expressions |  |
| [@typescript-eslint/switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check) | Require switch-case statements to be exhaustive |  |
| [@typescript-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference) | Disallow certain triple slash directives in favor of ES6-style import declarations | [ts](#config-ts) |
| [@typescript-eslint/typedef](https://typescript-eslint.io/rules/typedef) | Require type annotations in certain places |  |
| [@typescript-eslint/unbound-method](https://typescript-eslint.io/rules/unbound-method) | Enforce unbound methods are called with their expected scope | [ts](#config-ts) |
| [@typescript-eslint/unified-signatures](https://typescript-eslint.io/rules/unified-signatures) | Disallow two overloads that could be unified into one with a union or an optional/rest parameter | [ts](#config-ts) |
| [@typescript-eslint/use-unknown-in-catch-callback-variable](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable) | Enforce typing arguments in Promise rejection callbacks as `unknown` | [ts](#config-ts) |
| [n/callback-return](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md) | require `return` statements after callbacks |  |
| [n/exports-style](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md) | enforce either `module.exports` or `exports` |  |
| [n/file-extension-in-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md) | enforce the style of file extensions in `import` declarations |  |
| [n/global-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md) | require `require()` calls to be placed at top-level module scope |  |
| [n/handle-callback-err](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md) | require error handling in callbacks |  |
| [n/hashbang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md) | require correct usage of hashbang | [js](#config-js), [ts](#config-ts) |
| [n/no-callback-literal](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md) | enforce Node.js-style error-first callback pattern is followed |  |
| [n/no-deprecated-api](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md) | disallow deprecated APIs | [js](#config-js), [ts](#config-ts) |
| [n/no-exports-assign](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md) | disallow the assignment to `exports` | [js](#config-js), [ts](#config-ts) |
| [n/no-extraneous-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md) | disallow `import` declarations which import extraneous modules | [js](#config-js), [ts](#config-ts) |
| [n/no-extraneous-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md) | disallow `require()` expressions which import extraneous modules | [js](#config-js), [ts](#config-ts) |
| [n/no-hide-core-modules](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md) | disallow third-party modules which are hiding core modules |  |
| [n/no-missing-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md) | disallow `import` declarations which import non-existence modules | [js](#config-js), [ts](#config-ts) |
| [n/no-missing-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md) | disallow `require()` expressions which import non-existence modules | [js](#config-js), [ts](#config-ts) |
| [n/no-mixed-requires](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md) | disallow `require` calls to be mixed with regular variable declarations |  |
| [n/no-new-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md) | disallow `new` operators with calls to `require` |  |
| [n/no-path-concat](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md) | disallow string concatenation with `__dirname` and `__filename` |  |
| [n/no-process-env](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md) | disallow the use of `process.env` | [js](#config-js), [ts](#config-ts) |
| [n/no-process-exit](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md) | disallow the use of `process.exit()` | [js](#config-js), [ts](#config-ts) |
| [n/no-restricted-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md) | disallow specified modules when loaded by `import` declarations |  |
| [n/no-restricted-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md) | disallow specified modules when loaded by `require` |  |
| [n/no-sync](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md) | disallow synchronous methods |  |
| [n/no-unpublished-bin](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md) | disallow `bin` files that npm ignores | [js](#config-js), [ts](#config-ts) |
| [n/no-unpublished-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md) | disallow `import` declarations which import private modules | [js](#config-js), [ts](#config-ts) |
| [n/no-unpublished-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md) | disallow `require()` expressions which import private modules | [js](#config-js), [ts](#config-ts) |
| [n/no-unsupported-features/es-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md) | disallow unsupported ECMAScript built-ins on the specified version | [js](#config-js), [ts](#config-ts) |
| [n/no-unsupported-features/es-syntax](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md) | disallow unsupported ECMAScript syntax on the specified version | [js](#config-js), [ts](#config-ts) |
| [n/no-unsupported-features/node-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md) | disallow unsupported Node.js built-in APIs on the specified version | [js](#config-js), [ts](#config-ts) |
| [n/prefer-global/buffer](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md) | enforce either `Buffer` or `require("buffer").Buffer` |  |
| [n/prefer-global/console](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md) | enforce either `console` or `require("console")` |  |
| [n/prefer-global/process](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md) | enforce either `process` or `require("process")` |  |
| [n/prefer-global/text-decoder](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md) | enforce either `TextDecoder` or `require("util").TextDecoder` |  |
| [n/prefer-global/text-encoder](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md) | enforce either `TextEncoder` or `require("util").TextEncoder` |  |
| [n/prefer-global/url](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md) | enforce either `URL` or `require("url").URL` |  |
| [n/prefer-global/url-search-params](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md) | enforce either `URLSearchParams` or `require("url").URLSearchParams` |  |
| [n/prefer-node-protocol](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md) | enforce using the `node:` protocol when importing Node.js builtin modules. |  |
| [n/prefer-promises/dns](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md) | enforce `require("dns").promises` |  |
| [n/prefer-promises/fs](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md) | enforce `require("fs").promises` |  |
| [n/process-exit-as-throw](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md) | require that `process.exit()` expressions use the same code path as `throw` | [js](#config-js), [ts](#config-ts) |
| [n/shebang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md) | require correct usage of hashbang |  |
| [unicorn/better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/better-regex.md) | Improve regexes by making them shorter, consistent, and safer. | [js](#config-js), [ts](#config-ts) |
| [unicorn/catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/catch-error-name.md) | Enforce a specific parameter name in catch clauses. |  |
| [unicorn/consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-destructuring.md) | Use destructured variables over properties. |  |
| [unicorn/consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-empty-array-spread.md) | Prefer consistent types when spreading a ternary in an array literal. |  |
| [unicorn/consistent-existence-index-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-existence-index-check.md) | Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`. |  |
| [unicorn/consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-function-scoping.md) | Move function definitions to the highest possible scope. |  |
| [unicorn/custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/custom-error-definition.md) | Enforce correct `Error` subclassing. |  |
| [unicorn/empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/empty-brace-spaces.md) | Enforce no spaces between braces. |  |
| [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/error-message.md) | Enforce passing a `message` value when creating a built-in error. | [js](#config-js), [ts](#config-ts) |
| [unicorn/escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/escape-case.md) | Require escape sequences to use uppercase values. |  |
| [unicorn/expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/expiring-todo-comments.md) | Add expiration conditions to TODO comments. | [js](#config-js), [ts](#config-ts) |
| [unicorn/explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/explicit-length-check.md) | Enforce explicitly comparing the `length` or `size` property of a value. | [js](#config-js), [ts](#config-ts) |
| [unicorn/filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/filename-case.md) | Enforce a case style for filenames. | [js](#config-js), [ts](#config-ts) |
| [unicorn/import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#import-index) |  |  |
| [unicorn/import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/import-style.md) | Enforce specific import styles per module. |  |
| [unicorn/new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/new-for-builtins.md) | Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-abusive-eslint-disable.md) | Enforce specifying rules to disable in `eslint-disable` comments. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-anonymous-default-export.md) | Disallow anonymous functions and classes as the default export. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-callback-reference.md) | Prevent passing a function reference directly to iterator methods. |  |
| [unicorn/no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-for-each.md) | Prefer `for…of` over the `forEach` method. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-array-instanceof](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-array-instanceof) |  |  |
| [unicorn/no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-method-this-argument.md) | Disallow using the `this` argument in array methods. |  |
| [unicorn/no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-push-push.md) | Enforce combining multiple `Array#push()` into one call. |  |
| [unicorn/no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-reduce.md) | Disallow `Array#reduce()` and `Array#reduceRight()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-expression-member.md) | Disallow member access from await expression. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-in-promise-methods.md) | Disallow using `await` in `Promise` method parameters. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-console-spaces.md) | Do not use leading/trailing space between `console.log` parameters. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-document-cookie.md) | Do not use `document.cookie` directly. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-empty-file.md) | Disallow empty files. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-fn-reference-in-iterator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-fn-reference-in-iterator) |  |  |
| [unicorn/no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-for-loop.md) | Do not use a `for` loop that can be replaced with a `for-of` loop. | [js](#config-js) |
| [unicorn/no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-hex-escape.md) | Enforce the use of Unicode escapes instead of hexadecimal escapes. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-instanceof-array.md) | Require `Array.isArray()` instead of `instanceof Array`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-fetch-options.md) | Disallow invalid options in `fetch()` and `new Request()`. |  |
| [unicorn/no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-remove-event-listener.md) | Prevent calling `EventTarget#removeEventListener()` with the result of an expression. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-keyword-prefix.md) | Disallow identifiers starting with `new` or `class`. |  |
| [unicorn/no-length-as-slice-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-length-as-slice-end.md) | Disallow using `.length` as the `end` argument of `{Array,String,TypedArray}#slice()`. |  |
| [unicorn/no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-lonely-if.md) | Disallow `if` statements as the only statement in `if` blocks without `else`. |  |
| [unicorn/no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-magic-array-flat-depth.md) | Disallow a magic number as the `depth` argument in `Array#flat(…).` |  |
| [unicorn/no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negated-condition.md) | Disallow negated conditions. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negation-in-equality-check.md) | Disallow negated expression in equality check. |  |
| [unicorn/no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-nested-ternary.md) | Disallow nested ternary expressions. |  |
| [unicorn/no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-array.md) | Disallow `new Array()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-buffer.md) | Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-null.md) | Disallow the use of the `null` literal. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-object-as-default-parameter.md) | Disallow the use of objects as default parameters. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-process-exit.md) | Disallow `process.exit()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-reduce) |  |  |
| [unicorn/no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-single-promise-in-promise-methods.md) | Disallow passing single-element arrays to `Promise` methods. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-static-only-class.md) | Disallow classes that only have static members. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-thenable.md) | Disallow `then` property. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-this-assignment.md) | Disallow assigning `this` to a variable. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-typeof-undefined.md) | Disallow comparing `undefined` using `typeof`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-await.md) | Disallow awaiting non-promise values. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-polyfills.md) | Enforce the use of built-in methods instead of unnecessary polyfills. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-array-destructuring.md) | Disallow unreadable array destructuring. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-iife.md) | Disallow unreadable IIFEs. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-unsafe-regex) |  |  |
| [unicorn/no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unused-properties.md) | Disallow unused object properties. |  |
| [unicorn/no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-fallback-in-spread.md) | Disallow useless fallback when spreading in object literals. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-length-check.md) | Disallow useless array length check. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-promise-resolve-reject.md) | Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-spread.md) | Disallow unnecessary spread. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-switch-case.md) | Disallow useless case in switch statements. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-undefined.md) | Disallow useless `undefined`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-zero-fractions.md) | Disallow number literals with zero fractions or dangling dots. | [js](#config-js), [ts](#config-ts) |
| [unicorn/number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/number-literal-case.md) | Enforce proper case for numeric literals. |  |
| [unicorn/numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/numeric-separators-style.md) | Enforce the style of numeric separators by correctly grouping digits. |  |
| [unicorn/prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-add-event-listener.md) | Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-find.md) | Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`. | [js](#config-js) |
| [unicorn/prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat.md) | Prefer `Array#flat()` over legacy techniques to flatten arrays. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat-map.md) | Prefer `.flatMap(…)` over `.map(…).flat()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-index-of.md) | Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-some.md) | Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-at.md) | Prefer `.at()` method for index access and `String#charAt()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-blob-reading-methods.md) | Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-code-point.md) | Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-dataset) |  |  |
| [unicorn/prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-date-now.md) | Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-default-parameters.md) | Prefer default parameters over reassignment. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-append.md) | Prefer `Node#append()` over `Node#appendChild()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-dataset.md) | Prefer using `.dataset` on DOM elements over calling attribute methods. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-remove.md) | Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-text-content.md) | Prefer `.textContent` over `.innerText`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-event-key) |  |  |
| [unicorn/prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-event-target.md) | Prefer `EventTarget` over `EventEmitter`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-exponentiation-operator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-exponentiation-operator) |  |  |
| [unicorn/prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-export-from.md) | Prefer `export…from` when re-exporting. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-flat-map) |  |  |
| [unicorn/prefer-global-this](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-global-this.md) | Prefer `globalThis` over `window`, `self`, and `global`. |  |
| [unicorn/prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-includes.md) | Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence. | [js](#config-js) |
| [unicorn/prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-json-parse-buffer.md) | Prefer reading a JSON file as a buffer. |  |
| [unicorn/prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-keyboard-event-key.md) | Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-logical-operator-over-ternary.md) | Prefer using a logical operator over a ternary. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-math-min-max](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-min-max.md) | Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons. |  |
| [unicorn/prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-trunc.md) | Enforce the use of `Math.trunc` instead of bitwise operators. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-dom-apis.md) | Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-math-apis.md) | Prefer modern `Math` APIs over legacy patterns. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md) | Prefer JavaScript modules (ESM) over CommonJS. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-native-coercion-functions.md) | Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-negative-index.md) | Prefer negative index over `.length - index` when possible. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-node-append) |  |  |
| [unicorn/prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-node-protocol.md) | Prefer using the `node:` protocol when importing Node.js builtin modules. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-node-remove) |  |  |
| [unicorn/prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-number-properties.md) | Prefer `Number` static properties over global ones. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-object-from-entries.md) | Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-object-has-own](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-object-has-own) |  |  |
| [unicorn/prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-optional-catch-binding.md) | Prefer omitting the `catch` binding parameter. |  |
| [unicorn/prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-prototype-methods.md) | Prefer borrowing methods from the prototype instead of the instance. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-query-selector.md) | Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-reflect-apply.md) | Prefer `Reflect.apply()` over `Function#apply()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-regexp-test.md) | Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-replace-all) |  |  |
| [unicorn/prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-has.md) | Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence. |  |
| [unicorn/prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-size.md) | Prefer using `Set#size` instead of `Array#length`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-spread.md) | Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`. |  |
| [unicorn/prefer-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-starts-ends-with) |  |  |
| [unicorn/prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-raw.md) | Prefer using the `String.raw` tag to avoid escaping `\`. |  |
| [unicorn/prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-replace-all.md) | Prefer `String#replaceAll()` over regex searches with the global flag. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-slice.md) | Prefer `String#slice()` over `String#substr()` and `String#substring()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-starts-ends-with.md) | Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`. | [js](#config-js) |
| [unicorn/prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-trim-start-end.md) | Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-structured-clone.md) | Prefer using `structuredClone` to create a deep clone. |  |
| [unicorn/prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-switch.md) | Prefer `switch` over multiple `else-if`. |  |
| [unicorn/prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-ternary.md) | Prefer ternary expressions over simple `if-else` statements. |  |
| [unicorn/prefer-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-text-content) |  |  |
| [unicorn/prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-top-level-await.md) | Prefer top-level await over top-level promises and async function calls. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prefer-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-trim-start-end) |  |  |
| [unicorn/prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-type-error.md) | Enforce throwing `TypeError` in type checking conditions. | [js](#config-js), [ts](#config-ts) |
| [unicorn/prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prevent-abbreviations.md) | Prevent abbreviations. |  |
| [unicorn/regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#regex-shorthand) |  |  |
| [unicorn/relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/relative-url-style.md) | Enforce consistent relative URL style. | [js](#config-js), [ts](#config-ts) |
| [unicorn/require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-array-join-separator.md) | Enforce using the separator argument with `Array#join()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-number-to-fixed-digits-argument.md) | Enforce using the digits argument with `Number#toFixed()`. | [js](#config-js), [ts](#config-ts) |
| [unicorn/require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-post-message-target-origin.md) | Enforce using the `targetOrigin` argument with `window.postMessage()`. |  |
| [unicorn/string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/string-content.md) | Enforce better string content. |  |
| [unicorn/switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/switch-case-braces.md) | Enforce consistent brace style for `case` clauses. |  |
| [unicorn/template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/template-indent.md) | Fix whitespace-insensitive template indentation. |  |
| [unicorn/text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/text-encoding-identifier-case.md) | Enforce consistent case for text encoding identifiers. |  |
| [unicorn/throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/throw-new-error.md) | Require `new` when creating an error. | [js](#config-js), [ts](#config-ts) |

