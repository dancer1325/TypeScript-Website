* this repo == MULTIPLE packages

# Getting Started

* stack
  * [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
  * Node v13+
  * [watchman](https://facebook.github.io/watchman/docs/install.html)
  * [debug](https://www.npmjs.com/package/debug)
    * if you want to get verbose logs -> `env DEBUG="*" yarn test` 

## how to run it locally?
* 
    ```sh
    yarn install
    
    # Then:
    yarn bootstrap
    
    # Optional, grab the translations:
    yarn docs-sync pull microsoft/TypeScript-Website-localizations#main 1
    
    # start up the website
    yarn start
    ```
* | browser,
  * "8000"

## Deployment

* AUTOMATICALLY
  - pushes | branch `v2` -> deploy | [staging](http://www.staging-typescript.org)
  - | Monday,
    - v2 branch -> deployed | [production](https://www.typescriptlang.org)

* [build logs](https://github.com/microsoft/TypeScript-Website/actions)

# Docs

* [website repo itself](docs)
* [documentation packages](#doc-packages)

# Packages

## Website Packages

### [TypeScriptLang-Org](/packages/typescriptlang-org)

The main website for TypeScript, a Gatsby website which is statically deployed. You can run it via:

```sh
yarn start
```

To optimize even more, the env var `NO_TRANSLATIONS` as truthy will make the website only load pages for English.

### [Sandbox](/packages/sandbox)

The editor aspect of the TypeScript Playground REPL, useable for all sites which want to show a monaco editor
with TypeScript or JavaScript code.

### [Playground](/packages/playground)

The JS code has an AMD module for the playground which is loaded at runtime in the Playground website.

## Doc Packages

### [TSConfig Reference](/packages/tsconfig-reference)

* == tools + scripts /
  * generate a [TSConfig JSON file's API reference](packages/tsconfig-reference/scripts/schema/result/schema.json) -- via -- 

    ```sh
    yarn workspace tsconfig-reference build
    ```

  * scripts

    ```sh
    # Generate JSON from the typescript cli
    yarn workspace tsconfig-reference run generate-json
    # Jams them all into a single file
    yarn workspace tsconfig-reference run generate-markdown
    ```

    * validate the docs

      ```sh
      yarn workspace tsconfig-reference run test
    
      # or to just run the linter without a build
      yarn workspace tsconfig-reference run lint
    
      # or to just one one linter for a single doc
      yarn workspace tsconfig-reference run lint resolveJson
      ```

### Documentation

* history
  * ORIGINALLY,
    * [microsoft/TypeScript-Handbook](https://github.com/microsoft/TypeScript-Handbook/) 
  * AFTERWARD, 
    * [microsoft/TypeScript-New-Handbook](https://github.com/microsoft/TypeScript-New-Handbook)
  * NOWADAYS,
    * updated -- for -- [Twoslash](http://www.staging-typescript.org/dev/twoslash/)

### [Playground Handbook](/packages/playground-handbook)

* Playground's user-facing documentation 

### [Playground Examples](/packages/playground-examples)

## Infra Packages

* TODO: Most of these packages use [`tsdx`](https://tsdx.io).

### TS Twoslash

A code sample markup extension for TypeScript
* Available on npm: [@typescript/twoslash](https://www.npmjs.com/package/@typescript/twoslash)

### TypeScript VFS

A comprehensive way to run TypeScript projects in-memory in a browser or node environment
* Available on npm: [@typescript/vfs](https://www.npmjs.com/package/@typescript/vfs)

### Create Playground Plugin

A template for generating a new playground plugin which you can use via `npm init playground-plugin [name]`

### Community Meta

Generates contribution JSON metadata on who edited handbook pages.

### Playground Worker

A web worker which sits between the Playground and Monaco-TypeScript

# Meta

- **Admin**
  - | Prod
    - [Azure Portal](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/99160d5b-9289-4b66-8074-ed268e739e8e/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/TypeScript-1ebb3390-2634-4956-a955-eab987b7bb25/appServices)
    - [Deploy logs](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/99160d5b-9289-4b66-8074-ed268e739e8e/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/TypeScript-1ebb3390-2634-4956-a955-eab987b7bb25/vstscd)
    - [App Insights](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/57bfeeed-c34a-4ffd-a06b-ccff27ac91b8/resourceGroups/typescriptlang-org/providers/microsoft.insights/components/TypeScriptLang-Prod-Ai/overview)
- [TypeScript-Website's localizations](https://github.com/microsoft/TypeScript-Website-Localizations)

# Contributing

* [Contributor License Agreement (CLA)](https://cla.microsoft.com)
