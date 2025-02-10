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

import { $, chalk, echo, usePwsh } from "zx";

usePwsh();

try {
  await $`pnpm nx run-many --target=lint --all --exclude="@monorepo-template/monorepo" --parallel=5`.timeout(
    `${30 * 60}s`
  );
  await $`pnpm exec storm-lint all --skip-cspell --skip-circular-deps`.timeout(
    `${30 * 60}s`
  );

  echo`${chalk.green("Successfully formatted the monorepo's files")}`;
} catch (error) {
  echo`${chalk.red(`A failure occurred while formatting the monorepo:
${error?.message ? error.message : "No message could be found"}
`)}`;
}
