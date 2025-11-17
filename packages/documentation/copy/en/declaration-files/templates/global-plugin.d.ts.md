---
title: "Global: Plugin"
layout: docs
permalink: /docs/handbook/declaration-files/templates/global-plugin-d-ts.html
---

## _UMD_

* _UMD_ module
  * == module /
    * uses
      * as module (-- via -- `import`) or
      * as a global module (run | environment WITHOUT a module loader)
  * _Example:_ [Moment.js](http://momentjs.com/)
    * -> if you want to use | 
      * Node.js or RequireJS, you would write

        ```ts
        import moment = require("moment");
        console.log(moment.format());
        ```
      * vanilla browser environment, you would write

        ```js
        console.log(moment.format());
        ```
  * see [UMD repo](https://github.com/umdjs/umd)

### Identifying a UMD library

* check module loader environment [here](https://github.com/umdjs/umd) 
* easy to identify by 
  * | top of the tests, find
    * `typeof define`,
    * `typeof window`,
    * `typeof module`
  * documentation for UMD libraries, often demonstrate
    * "Using in Node.js" example / show `require`,
    * "Using in the browser" example / use `<script>` -- to load the -- script
* _Example:_ typical look
  ```js
  (function (root, factory) {
      if (typeof define === "function" && define.amd) {
          define(["libName"], factory);
      } else if (typeof module === "object" && module.exports) {
          module.exports = factory(require("libName"));
      } else {
          root.returnExports = factory(root.libName);
      }
  }(this, function (b) {})
  ```

### Examples of UMD libraries

* MOST popular UMD libraries -- are NOW available as -- UMD packages
  * _Example:_ [jQuery](https://jquery.com/), [Moment.js](http://momentjs.com/), [lodash](https://lodash.com/)

### Template

* templates / available for modules
  * [`module.d.ts`](module.d.ts.md),
    * uses
      * if your module -- can NOT be -- _constructed_ or _called_
  * [`module-class.d.ts`](module-class.d.ts.md)
    * uses
      * if your module -- can be _constructed_ using -- `new`
        ```js
        var x = require("bar");
        // Note: using 'new' operator on the imported variable
        var y = new x("hello");
        ```
  * [`module-function.d.ts`](module-function.d.ts.md)
    * uses
      * if your module -- can be _called_ like a -- function
        ```js
        var x = require("foo");
        // Note: calling 'x' as a function
        var y = x(42);
        ```

* see ["The Impact of ES6 on Module Call Signatures"](#the-impact-of-es6-on-module-plugins)

## _Module Plugin_ or _UMD Plugin_

* _module plugin_
  * changes the shape of another module (either UMD module or plain module)
    * independently if it comes from UMD module or plain module -> SAME declaration file 
  * _Example:_ | Moment.js, `moment-range` -- adds a -- new `range` method | `moment` object

### Template

* use the [`module-plugin.d.ts`](module-plugin.d.ts.md) template

## _Global Plugin_

* _global plugin_
  * := global code / changes the shape of some global
    * possible runtime conflict
      * == _global-modifying modules_ 
  * _Example:_ SOME libraries / add NEW functions | `Array.prototype` or `String.prototype`

### Identifying global plugins

* easy to identify -- from -- their documentation
* _Example:_ typical look
  ```js
  var x = "hello, world";
  // Creates new methods on built-in types
  console.log(x.startsWithHello());
  
  var y = [1, 2, 3];
  // Creates new methods on built-in types
  console.log(y.reverseAndSort());
  ```

### Template

* use [`global-plugin.d.ts`](global-plugin.d.ts.md) template

## _Global-modifying Modules_

* TODO:
A _global-modifying module_ alters existing values in the global scope when they are imported.
For example, there might exist a library which adds new members to `String.prototype` when imported.
This pattern is somewhat dangerous due to the possibility of runtime conflicts,
but we can still write a declaration file for it.

### Identifying global-modifying modules

Global-modifying modules are generally easy to identify from their documentation.
In general, they're similar to global plugins, but need a `require` call to activate their effects.

You might see documentation like this:

```js
// 'require' call that doesn't use its return value
var unused = require("magic-string-time");
/* or */
require("magic-string-time");

var x = "hello, world";
// Creates new methods on built-in types
console.log(x.startsWithHello());

var y = [1, 2, 3];
// Creates new methods on built-in types
console.log(y.reverseAndSort());
```

### Template

Use the [`global-modifying-module.d.ts`](/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) template.

## Consuming Dependencies

There are several kinds of dependencies your library might have.
This section shows how to import them into the declaration file.

### Dependencies on Global Libraries

If your library depends on a global library, use a `/// <reference types="..." />` directive:

```ts
/// <reference types="someLib" />

function getThing(): someLib.thing;
```

### Dependencies on Modules

If your library depends on a module, use an `import` statement:

```ts
import * as moment from "moment";

function getThing(): moment;
```

### Dependencies on UMD libraries

#### From a Global Library

If your global library depends on a UMD module, use a `/// <reference types` directive:

```ts
/// <reference types="moment" />

function getThing(): moment;
```

#### From a Module or UMD Library

If your module or UMD library depends on a UMD library, use an `import` statement:

```ts
import * as someLib from "someLib";
```

Do _not_ use a `/// <reference` directive to declare a dependency to a UMD library!

## Footnotes

### Preventing Name Conflicts

Note that it's possible to define many types in the global scope when writing a global declaration file.
We strongly discourage this as it leads to possible unresolvable name conflicts when many declaration files are in a project.

A simple rule to follow is to only declare types _namespaced_ by whatever global variable the library defines.
For example, if the library defines the global value 'cats', you should write

```ts
declare namespace cats {
  interface KittySettings {}
}
```

But _not_

```ts
// at top-level
interface CatsKittySettings {}
```

This guidance also ensures that the library can be transitioned to UMD without breaking declaration file users.

### The Impact of ES6 on Module Plugins

Some plugins add or modify top-level exports on existing modules.
While this is legal in CommonJS and other loaders, ES6 modules are considered immutable and this pattern will not be possible.
Because TypeScript is loader-agnostic, there is no compile-time enforcement of this policy, but developers intending to transition to an ES6 module loader should be aware of this.

### The Impact of ES6 on Module Call Signatures

Many popular libraries, such as Express, expose themselves as a callable function when imported.
For example, the typical Express usage looks like this:

```ts
import exp = require("express");
var app = exp();
```

In ES6 module loaders, the top-level object (here imported as `exp`) can only have properties;
the top-level module object is _never_ callable.
The most common solution here is to define a `default` export for a callable/constructable object;
some module loader shims will automatically detect this situation and replace the top-level object with the `default` export.

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

```ts
// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This template shows how to write a global plugin. */

/*~ Write a declaration for the original type and add new members.
 *~ For example, this adds a 'toBinaryString' method with overloads to
 *~ the built-in number type.
 */
interface Number {
  toBinaryString(opts?: MyLibrary.BinaryFormatOptions): string;

  toBinaryString(
    callback: MyLibrary.BinaryFormatCallback,
    opts?: MyLibrary.BinaryFormatOptions
  ): string;
}

/*~ If you need to declare several types, place them inside a namespace
 *~ to avoid adding too many things to the global namespace.
 */
declare namespace MyLibrary {
  type BinaryFormatCallback = (n: number) => string;
  interface BinaryFormatOptions {
    prefix?: string;
    padding: number;
  }
}
```
