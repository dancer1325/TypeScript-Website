---
display: "Allow Importing TS Extensions"
oneline: "Allow imports to include TypeScript file extensions."
---

* `--allowImportingTsExtensions` 
  * allows
    * 👀importing TypeScript files -- , thanks to your resolver (bundler, a runtime, or some other tool), via -- TypeScript-specific extension (".ts", ".mts", or ".tsx")👀

* requirements
  * ⚠️enable `--noEmit` OR `--emitDeclarationOnly`⚠️
    * Reason:🧠these import paths would NOT be resolvable | runtime | ".js" output files🧠
