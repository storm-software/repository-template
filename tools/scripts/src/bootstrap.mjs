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

import { chalk, echo, usePwsh } from "zx";

usePwsh();

try {
  //   await build({
  //     entryPoints: ["tools/nx/src/plugins/package-build.ts"],
  //     target: "node22",
  //     outdir: "dist/plugins",
  //     tsconfig: "tools/nx/tsconfig.json",
  //     packages: "bundle",
  //     external: ["nx", "@nx/devkit"],
  //     logLevel: "info",
  //     bundle: true,
  //     minify: false,
  //     format: "esm",
  //     platform: "node",
  //     preserveSymlinks: true
  //   });

  echo`${chalk.green("Completed monorepo bootstrapping successfully!")}`;
} catch (error) {
  echo`${chalk.red(`A failure occurred while building the monorepo:
${error?.message ? error.message : "No message could be found"}
`)}`;
}
