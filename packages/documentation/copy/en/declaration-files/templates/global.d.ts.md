---
title: "Global .d.ts"
layout: docs
permalink: /docs/handbook/declaration-files/templates/global-d-ts.html
---

## Global Libraries

<!-- 
TODO: 
2. if you have a global library that you suspect is UMD, look for instructions on
   a. how to import it
   b. -OR- how to make it work with webpack
3. Make the page follow the structure of documentation,usage,source example.
-->

* _global_ library
  * global == 'browser'
  * == library / can be accessed -- from the -- global scope ( == WITHOUT using any form of `import`)
  * guidance | documentation of a global library, about how to use the library

    ```html
    <script src="http://a.great.cdn.for/someLib.js"></script>
    ```
  * TODAY,
    * MOST are actually written -- as -- UMD libraries 

* global declaration file
  * | BEFORE writing it, check that is NOT actually UMD

* MANY libraries simply expose >=1 global variables for use
  * _Example:_ if you were using [jQuery](https://jquery.com/) -> `$` variable -- can be used by simply -- referring to it

    ```ts
    $(() => {
      console.log("hello!");
    });
    ```

* UMD library documentation
  * vs global library documentation
    * hard to distinguish

## Identifying a Global Library from Code

* Global library code
  * extremely simple
    * _Example:_

        ```js
        function createGreeting(s) {
          return "Hello, " + s;
        }
        
        // or
        window.createGreeting = function (s) {
        return "Hello, " + s;
        }; 
        ```
  * typical elements
    * Top-level `var` statements or `function` declarations
    * \>=1 assignments to `window.someName`
    * DOM primitives exist
      * _Example:_ `document` or `window`
    * / NOT see
      * Checks for, or usage of, module loaders
        * _Example:_ `require` or `define`
      * CommonJS/Node.js-style imports of the form `var fs = require("fs");`
      * Calls to `define(...)`
      * Documentation / describe how to `require` or import the library

## Examples of Global Libraries

* TODO:
Because it's usually easy to turn a global library into a UMD library, very few popular libraries are still written in the global style.
However, libraries that are small and require the DOM (or have _no_ dependencies) may still be global.

## Global Library Template

You can see an example DTS below:

```ts
// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ If this library is callable (e.g. can be invoked as myLib(3)),
 *~ include those call signatures here.
 *~ Otherwise, delete this section.
 */
declare function myLib(a: string): string;
declare function myLib(a: number): number;

/*~ If you want the name of this library to be a valid type name,
 *~ you can do so here.
 *~
 *~ For example, this allows us to write 'var x: myLib';
 *~ Be sure this actually makes sense! If it doesn't, just
 *~ delete this declaration and add types inside the namespace below.
 */
interface myLib {
  name: string;
  length: number;
  extras?: string[];
}

/*~ If your library has properties exposed on a global variable,
 *~ place them here.
 *~ You should also place types (interfaces and type alias) here.
 */
declare namespace myLib {
  //~ We can write 'myLib.timeout = 50;'
  let timeout: number;

  //~ We can access 'myLib.version', but not change it
  const version: string;

  //~ There's some class we can create via 'let c = new myLib.Cat(42)'
  //~ Or reference e.g. 'function f(c: myLib.Cat) { ... }
  class Cat {
    constructor(n: number);

    //~ We can read 'c.age' from a 'Cat' instance
    readonly age: number;

    //~ We can invoke 'c.purr()' from a 'Cat' instance
    purr(): void;
  }

  //~ We can declare a variable as
  //~   'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
  interface CatSettings {
    weight: number;
    name: string;
    tailLength?: number;
  }

  //~ We can write 'const v: myLib.VetID = 42;'
  //~  or 'const v: myLib.VetID = "bob";'
  type VetID = string | number;

  //~ We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
  function checkCat(c: Cat, s?: VetID);
}
```
