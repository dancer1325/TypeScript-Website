---
title: Modules .d.ts
layout: docs
permalink: /docs/handbook/declaration-files/templates/module-d-ts.html
---

## Common CommonJS Patterns

* module / uses CommonJS patterns -> describe the exported values -- via -- `module.exports`
  * _Example:_ module / exports a function & numerical constant

    ```js
    const maxInterval = 12;
    
    function getArrayLength(arr) {
      return arr.length;
    }
    
    module.exports = {
      getArrayLength,
      maxInterval,
    };
    ```

    == -- via -- `.d.ts`

    ```.d.ts
    export function getArrayLength(arr: any[]): number;
    export const maxInterval: 12;
    ```

* TypeScript playground 
  * from ".ts" -> show the equivalent
    * `.d.ts`
    * `.js` 
  * _Example:_ [playgroundExample](https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)

* `.d.ts`
  * syntax 
    * == [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) syntax
  * if you run `tsc fileName.d.ts` -> NOTHING generated
  * vs ES Modules
    * 👀recommended to use ES Modules 👀
      * Reason: 🧠was ratified by TC39 in 2015 | ES2015 (ES6) 🧠
    * historically used `.d.ts` -- by -- transpilers
  * JS codebase / use ES Modules -> has a `.d.ts` equivalent
    * TODO: Commands to run?
      * Attempt1: `tsc --declaration --emitDeclarationOnly --outDir types module.js`
    * _Example:_ 

    ```js
    export function getArrayLength(arr) {
      return arr.length;
    }
    ```
    ==

    ```.d.ts
    export function getArrayLength(arr: any[]): number;
    ```

### Default Exports

* | CommonJS, you can use `export default` | ".d.ts"
  * requirements
    * [`esModuleInterop: true`](/tsconfig#esModuleInterop)
      * otherwise -> use `export=`
        * _Example:_ 
        
        ```.d.ts
        declare function getArrayLength(arr: any[]): number;
        declare namespace getArrayLength {
        declare const maxInterval: 12;
        }
        export = getArrayLength;
        ```
  * allowed |
    * any value
      * _Examples:_
        * _Example1:_ regular expression module

          ```js
          module.exports = /hello( world)?/;
          ```
          == 
          ```.d.ts
          declare const helloWorld: RegExp;
          export default helloWorld;
          ```
        * _Example2:_ number

          ```js
          module.exports = 3.142;
          ```
          ==  
          ```.d.ts
          declare const pi: number;
          export default pi;
          ```
    * function
      * == style of exporting
      * extra fields can be added & are | export
        * Reason: 🧠a function is ALSO an object 🧠
      * _Example:_
      ```js
      function getArrayLength(arr) {
        return arr.length;
      }
      getArrayLength.maxInterval = 12;    // add extra fields
    
      module.exports = getArrayLength;
      ```
      ==
      ```.d.ts
      export default function getArrayLength(arr: any[]): number;
      export const maxInterval: 12;
      ```
* see
  * [Module: Functions](/docs/handbook/declaration-files/templates/module-function-d-ts.html)
  * [Modules reference](/docs/handbook/modules.html)

## Handling Many Consuming Import

* TODO:
There are many ways to import a module in modern consuming code:

```ts
const fastify = require("fastify");
const { fastify } = require("fastify");
import fastify = require("fastify");
import * as Fastify from "fastify";
import { fastify, FastifyInstance } from "fastify";
import fastify from "fastify";
import fastify, { FastifyInstance } from "fastify";
```

Covering all of these cases requires the JavaScript code to actually support all of these patterns.
To support many of these patterns, a CommonJS module would need to look something like:

```js
class FastifyInstance {}

function fastify() {
  return new FastifyInstance();
}

fastify.FastifyInstance = FastifyInstance;

// Allows for { fastify }
fastify.fastify = fastify;
// Allows for strict ES Module support
fastify.default = fastify;
// Sets the default export
module.exports = fastify;
```

## Types in Modules

You may want to provide a type for JavaScript code which does not exist

```js
function getArrayMetadata(arr) {
  return {
    length: getArrayLength(arr),
    firstObject: arr[0],
  };
}

module.exports = {
  getArrayMetadata,
};
```

This can be described with:

```ts
export type ArrayMetadata = {
  length: number;
  firstObject: any | undefined;
};
export function getArrayMetadata(arr: any[]): ArrayMetadata;
```

This example is a good case for [using generics](/docs/handbook/generics.html#generic-types) to provide richer type information:

```ts
export type ArrayMetadata<ArrType> = {
  length: number;
  firstObject: ArrType | undefined;
};

export function getArrayMetadata<ArrType>(
  arr: ArrType[]
): ArrayMetadata<ArrType>;
```

Now the type of the array propagates into the `ArrayMetadata` type.

The types which are exported can then be re-used by consumers of the modules using either `import` or `import type` in TypeScript code or [JSDoc imports](/docs/handbook/jsdoc-supported-types.html#import-types).

### Namespaces in Module Code

Trying to describe the runtime relationship of JavaScript code can be tricky.
When the ES Module-like syntax doesn't provide enough tools to describe the exports then you can use `namespaces`.

For example, you may have complex enough types to describe that you choose to namespace them inside your `.d.ts`:

```ts
// This represents the JavaScript class which would be available at runtime
export class API {
  constructor(baseURL: string);
  getInfo(opts: API.InfoRequest): API.InfoResponse;
}

// This namespace is merged with the API class and allows for consumers, and this file
// to have types which are nested away in their own sections.
declare namespace API {
  export interface InfoRequest {
    id: string;
  }

  export interface InfoResponse {
    width: number;
    height: number;
  }
}
```

To understand how namespaces work in `.d.ts` files read the [`.d.ts` deep dive](/docs/handbook/declaration-files/deep-dive.html).

### Optional Global Usage

You can use `export as namespace` to declare that your module will be available in the global scope in UMD contexts:

```ts
export as namespace moduleName;
```

## Reference Example

To give you an idea of how all these pieces can come together, here is a reference `.d.ts` to start with when making a new module

```ts
// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module exports functions, declare them like so.
 */
export function myFunction(a: string): string;
export function myOtherFunction(a: number): number;

/*~ You can declare types that are available via importing the module */
export interface SomeType {
  name: string;
  length: number;
  extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;
```

### Library file layout

The layout of your declaration files should mirror the layout of the library.

A library can consist of multiple modules, such as

```
myLib
  +---- index.js
  +---- foo.js
  +---- bar
         +---- index.js
         +---- baz.js
```

These could be imported as

```js
var a = require("myLib");
var b = require("myLib/foo");
var c = require("myLib/bar");
var d = require("myLib/bar/baz");
```

Your declaration files should thus be

```
@types/myLib
  +---- index.d.ts
  +---- foo.d.ts
  +---- bar
         +---- index.d.ts
         +---- baz.d.ts
```

### Testing your types

If you are planning on submitting these changes to DefinitelyTyped for everyone to also use, then we recommend you:

> 1. Create a new folder in `node_modules/@types/[libname]`
> 2. Create an `index.d.ts` in that folder, and copy the example in
> 3. See where your usage of the module breaks, and start to fill out the index.d.ts
> 4. When you're happy, clone [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped) and follow the instructions in the README. 

Otherwise

> 1. Create a new file in the root of your source tree: `[libname].d.ts`
> 2. Add `declare module "[libname]" {  }`
> 3. Add the template inside the braces of the declare module, and see where your usage breaks 
