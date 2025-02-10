/*-------------------------------------------------------------------

            ⚡ Storm Software - Monorepo Template

 This code was released as part of the Monorepo Template project. Monorepo Template
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/monorepo-template
 Documentation:   https://stormsoftware.com/projects/monorepo-template/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/monorepo-template/license

 -------------------------------------------------------------------*/

import { getStormConfig } from "@storm-software/eslint";

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

/** @type {import('eslint').Linter.Config[]} */
export default getStormConfig({
  name: "monorepo-template",
  rules: {
    "unicorn/no-null": 0,
    "unicorn/no-useless-switch-case": 0,
    "react/require-default-props": 0,
    "react/jsx-closing-bracket-location": 0,
    "indent": 0,
    "no-redeclare": 0,
    "class-methods-use-this": 0,
    "operator-linebreak": 0,
    "function-paren-newline": 0,
    "space-before-function-paren": 0
  },
  markdown: true,
  react: true,
  useUnicorn: true,
  typescriptEslintConfigType: "base"
});
