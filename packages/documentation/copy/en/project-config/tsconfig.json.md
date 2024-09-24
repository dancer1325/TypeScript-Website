---
title: What is a tsconfig.json
layout: docs
permalink: /docs/handbook/tsconfig-json.html
oneline: Learn about how a TSConfig works
translatable: true
---

## Overview

* ways to compile the project
  * `tsconfig.json`
  * `jsconfig.json`
* `tsconfig.json`
  * if there is a `tsconfig.json` file | directory -> directory == root of a TypeScript project
  * specifies about compiling the project, the
    * root files
    * compiler options
  * vs `jsconfig.json`
    * uses
      * JavaScript projects
    * == + JavaScript-related compiler flags / enabled by default

## Using `tsconfig.json` or `jsconfig.json`

* if you invoke `tsc` / NO input files 
  * -> compiler searches for the `tsconfig.json` | 
    * current directory
    * up the parent directory chain
  * & `--project pathOfADirectoryContainingOrPassingDirectlyTsConfig` or `-p pathOfADirectoryContainingOrPassingDirectlyTsConfig` -> 
    * search ONLY | `pathOfADirectoryContainingTsConfig`
    * if it's specified the `tsconfig.json` -> default `tsconfig.json` files are ignored

## Examples
* TODO:
Example `tsconfig.json` files:

- Using the [`files`](/tsconfig#files) property

  ```json tsconfig
  {
    "compilerOptions": {
      "module": "commonjs",
      "noImplicitAny": true,
      "removeComments": true,
      "preserveConstEnums": true,
      "sourceMap": true
    },
    "files": [
      "core.ts",
      "sys.ts",
      "types.ts",
      "scanner.ts",
      "parser.ts",
      "utilities.ts",
      "binder.ts",
      "checker.ts",
      "emitter.ts",
      "program.ts",
      "commandLineParser.ts",
      "tsc.ts",
      "diagnosticInformationMap.generated.ts"
    ]
  }
  ```

- Using the [`include`](/tsconfig#include) and [`exclude`](/tsconfig#exclude) properties

  ```json  tsconfig
  {
    "compilerOptions": {
      "module": "system",
      "noImplicitAny": true,
      "removeComments": true,
      "preserveConstEnums": true,
      "outFile": "../../built/local/tsc.js",
      "sourceMap": true
    },
    "include": ["src/**/*"],
    "exclude": ["**/*.spec.ts"]
  }
  ```

## TSConfig Bases

Depending on the JavaScript runtime environment which you intend to run your code in, there may be a base configuration which you can use at [github.com/tsconfig/bases](https://github.com/tsconfig/bases/).
These are `tsconfig.json` files which your project extends from which simplifies your `tsconfig.json` by handling the runtime support.

For example, if you were writing a project which uses Node.js version 12 and above, then you could use the npm module [`@tsconfig/node12`](https://www.npmjs.com/package/@tsconfig/node12):

```json tsconfig
{
  "extends": "@tsconfig/node12/tsconfig.json",

  "compilerOptions": {
    "preserveConstEnums": true
  },

  "include": ["src/**/*"],
  "exclude": ["**/*.spec.ts"]
}
```

This lets your `tsconfig.json` focus on the unique choices for your project, and not all of the runtime mechanics. There are a few tsconfig bases already, and we're hoping the community can add more for different environments.

## Details

* `"compilerOptions"` property
  * if you omit it -> compiler's defaults are used
  * check [Compiler Options](/tsconfig)

## TSConfig Reference

* check [TSConfig Reference](/tsconfig)

## Schema

* [`tsconfig.json` Schema](http://json.schemastore.org/tsconfig)
