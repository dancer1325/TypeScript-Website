---
title: Modules
layout: docs
permalink: /docs/handbook/modules.html
oneline: How modules work in TypeScript
translatable: true
---

* Module
  * history
    * released | ECMAScript 2015
  * AVAILABLE |
    * JS
    * TS
  * are declarative
    * == 👀relationships BETWEEN modules are specified -- via -- | file level, imports & exports👀
  * 's execution
    * | their OWN scope
      * != global scope
      * == variables, functions, classes, etc. / declared | module
        * | outside the module,
          * by default, ❌NOT visible❌
          * 👀if you want to
            * make them visible -> explicitly export -- via -- [some `export` forms](#export)👀
            * consume them -> imported -- via -- 
              * [some `import` forms](#import)
              * module loader

* module loader
  * | runtime,
    * responsible for
      * locating
      * BEFORE executing it, executing ALL module's dependencies  
  * existing ones
    * | JS,
      * Node.js's loader 
        * -- for -- [CommonJS](https://wikipedia.org/wiki/CommonJS) modules
      * [RequireJS](http://requirejs.org/) loader
        * -- for -- [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) modules | Web applications
    * | TS & ECMAScript 2015 
      * module 
        * == 👀ANY file / contains a top-level `import` or `export`👀 
      * file / WITHOUT top-level `import` or `export` declarations
        * == 👀script / 's contents are AVAILABLE | global scope👀

## Export

### Exporting a declaration

* -- via -- `export`
* declaration of 
  * variable,
  * function,
  * class,
  * type alias,
  * interface 

### Export statements

* `export as ...`
  * requirements
    * TypeScript v3.8+
* uses
  * exports / consumers can rename
  * [re-export](#re-exports)

### Re-exports

* == modules / 
  * extend OTHER modules
  * expose some of OTHER modules' features /
    * NOT 
      * import it locally
      * introduce a local variable

* uses
  * module / 👀wrap >= 1 modules & combine ALL exports👀

* `export * from "module"`

## Import

* 👀types👀
  * 1! export -- from a -- module 
    * it can be renamed
  * import the ENTIRE module | 1! variable
    * == use `as`
  * import the ENTIRE module
    * ❌NOT recommended❌
    * use cases
      * modules / set up global state / can be used by other modules
    * ❌NOT require❌
      * module / has exports
  * ways to import a `type`
    * | TypeScript v3.8-,
      * -- via -- `import`
    * | TypeScript v3.8+,
      * -- via --
        * `import`
        * `import type` 
          * -> 👀| JS, it's removed👀
          * see [3.8 release notes](/packages/documentation/copy/en/release-notes/TypeScript%203.8.md#type-only-imports-and-export)
    * | TypeScript v4.5+,
      * `import { ..., type someTypeToImport} from "..."`
        * -> 👀| JS, it's removed👀

* if you use some tool (_Example:_ Babel) -> use compiler flag's [`isolatedModules`](/packages/tsconfig-reference/copy/en/options/isolatedModules.md)

## Default exports

* `export default ...`
* / EACH module
  * OPTIONAL
  * ⚠️1!⚠️
* ALLOWED entities -- to -- export
  * class
  * function
  * variables
  * ...

### [JQuery.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/JQuery.d.ts)

* built-in default exports
  * `jQuery`
  * `$`

## `export * as exportedField`

* allows
  * ALL module's dependencies can be made an exported field

## `export =` and `import = require()`

* | CommonJS & AMD,
  * `exports` 
    * == object / 
      * contains ALL exports -- from a -- module
      * can be replaced -- with a -- 1! custom object

* | TypeScript,
  * `export = 1!ObjectToExport` & `import customObjectToImport = require()`
    * == traditional CommonJS and AMD workflow
    * `1!ObjectToExport`
      * can be
        * class,
        * interface,
        * namespace,
        * function,
        * enum

## Code Generation for Modules

* compiler will generate -- , based on module target | compilation, --  
  * appropriate code for
    * Node.js ([CommonJS](http://wiki.commonjs.org/wiki/CommonJS))
    * require.js ([AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)),
    * [UMD](https://github.com/umdjs/umd),
    * [SystemJS](https://github.com/systemjs/systemjs),
    * [ECMAScript 2015 native modules](http://www.ecma-international.org/ecma-262/6.0/#sec-modules) (ES6) module-loading systems
  * SEPARATE ".js"

* [here](/packages/tsconfig-reference/copy/en/options/module.md)

## `tsc --module moduleName`

* ALLOWED ones
  * `tsc --module commonjs`
    * -- for -- Node.js
  * `tsc --module amd`
    * -- for -- require.js

## Optional Module Loading & OTHER Advanced Loading Scenarios

* use case
  * | SOME conditions, load a module 

* compiler
  * 👀detects whether EACH module is used | emitted JavaScript👀
  * if a module identifier is ONLY used as part of a type annotations & NEVER as an expression -> NO `require` call is emitted / that module ->
    * performance optimization
    * OPTIONAL loading of those modules

* TODO:
The core idea of the pattern is that the `import id = require("...")` statement gives us access to the types exposed by the module.
The module loader is invoked (through `require`) dynamically, as shown in the `if` blocks below.
This leverages the reference-elision optimization so that the module is only loaded when needed.
For this pattern to work, it's important that the symbol defined via an `import` is only used in type positions (i.e. never in a position that would be emitted into the JavaScript).

To maintain type safety, we can use the `typeof` keyword.
The `typeof` keyword, when used in a type position, produces the type of a value, in this case the type of the module.

##### Dynamic Module Loading in Node.js

```ts
declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

if (needZipValidation) {
  let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
  let validator = new ZipCodeValidator();
  if (validator.isAcceptable("...")) {
    /* ... */
  }
}
```

##### Sample: Dynamic Module Loading in require.js

```ts
declare function require(
  moduleNames: string[],
  onLoad: (...args: any[]) => void
): void;

import * as Zip from "./ZipCodeValidator";

if (needZipValidation) {
  require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
    let validator = new ZipCodeValidator.ZipCodeValidator();
    if (validator.isAcceptable("...")) {
      /* ... */
    }
  });
}
```

##### Sample: Dynamic Module Loading in System.js

```ts
declare const System: any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

if (needZipValidation) {
  System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
    var x = new ZipCodeValidator();
    if (x.isAcceptable("...")) {
      /* ... */
    }
  });
}
```

## Working with Other JavaScript Libraries

To describe the shape of libraries not written in TypeScript, we need to declare the API that the library exposes.

We call declarations that don't define an implementation "ambient".
Typically, these are defined in `.d.ts` files.
If you're familiar with C/C++, you can think of these as `.h` files.
Let's look at a few examples.

### Ambient Modules

In Node.js, most tasks are accomplished by loading one or more modules.
We could define each module in its own `.d.ts` file with top-level export declarations, but it's more convenient to write them as one larger `.d.ts` file.
To do so, we use a construct similar to ambient namespaces, but we use the `module` keyword and the quoted name of the module which will be available to a later import.
For example:

##### node.d.ts (simplified excerpt)

```ts
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}

declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
}
```

Now we can `/// <reference>` `node.d.ts` and then load the modules using `import url = require("url");` or `import * as URL from "url"`.

```ts
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("https://www.typescriptlang.org");
```

#### Shorthand ambient modules

If you don't want to take the time to write out declarations before using a new module, you can use a shorthand declaration to get started quickly.

##### declarations.d.ts

```ts
declare module "hot-new-module";
```

All imports from a shorthand module will have the `any` type.

```ts
import x, { y } from "hot-new-module";
x(y);
```

#### Wildcard module declarations

Some module loaders such as [SystemJS](https://github.com/systemjs/systemjs/blob/master/docs/module-types.md)
and [AMD](https://github.com/amdjs/amdjs-api/blob/master/LoaderPlugins.md) allow non-JavaScript content to be imported.
These typically use a prefix or suffix to indicate the special loading semantics.
Wildcard module declarations can be used to cover these cases.

```ts
declare module "*!text" {
  const content: string;
  export default content;
}
// Some do it the other way around.
declare module "json!*" {
  const value: any;
  export default value;
}
```

Now you can import things that match `"*!text"` or `"json!*"`.

```ts
import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);
```

#### UMD modules

Some libraries are designed to be used in many module loaders, or with no module loading (global variables).
These are known as [UMD](https://github.com/umdjs/umd) modules.
These libraries can be accessed through either an import or a global variable.
For example:

##### math-lib.d.ts

```ts
export function isPrime(x: number): boolean;
export as namespace mathLib;
```

The library can then be used as an import within modules:

```ts
import { isPrime } from "math-lib";
isPrime(2);
mathLib.isPrime(2); // ERROR: can't use the global definition from inside a module
```

It can also be used as a global variable, but only inside of a script.
(A script is a file with no imports or exports.)

```ts
mathLib.isPrime(2);
```

## Guidance for structuring modules

### Export as close to top-level as possible

Consumers of your module should have as little friction as possible when using things that you export.
Adding too many levels of nesting tends to be cumbersome, so think carefully about how you want to structure things.

Exporting a namespace from your module is an example of adding too many layers of nesting.
While namespaces sometime have their uses, they add an extra level of indirection when using modules.
This can quickly become a pain point for users, and is usually unnecessary.

Static methods on an exported class have a similar problem - the class itself adds a layer of nesting.
Unless it increases expressivity or intent in a clearly useful way, consider simply exporting a helper function.

#### If you're only exporting a single `class` or `function`, use `export default`

Just as "exporting near the top-level" reduces friction on your module's consumers, so does introducing a default export.
If a module's primary purpose is to house one specific export, then you should consider exporting it as a default export.
This makes both importing and actually using the import a little easier.
For example:

##### MyClass.ts

```ts
export default class SomeType {
  constructor() { ... }
}
```

##### MyFunc.ts

```ts
export default function getThing() {
  return "thing";
}
```

##### Consumer.ts

```ts
import t from "./MyClass";
import f from "./MyFunc";
let x = new t();
console.log(f());
```

This is optimal for consumers. They can name your type whatever they want (`t` in this case) and don't have to do any excessive dotting to find your objects.

#### If you're exporting multiple objects, put them all at top-level

##### MyThings.ts

```ts
export class SomeType {
  /* ... */
}
export function someFunc() {
  /* ... */
}
```

Conversely when importing:

#### Explicitly list imported names

##### Consumer.ts

```ts
import { SomeType, someFunc } from "./MyThings";
let x = new SomeType();
let y = someFunc();
```

#### Use the namespace import pattern if you're importing a large number of things

##### MyLargeModule.ts

```ts
export class Dog { ... }
export class Cat { ... }
export class Tree { ... }
export class Flower { ... }
```

##### Consumer.ts

```ts
import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();
```

### Re-export to extend

Often you will need to extend functionality on a module.
A common JS pattern is to augment the original object with _extensions_, similar to how JQuery extensions work.
As we've mentioned before, modules do not _merge_ like global namespace objects would.
The recommended solution is to _not_ mutate the original object, but rather export a new entity that provides the new functionality.

Consider a simple calculator implementation defined in module `Calculator.ts`.
The module also exports a helper function to test the calculator functionality by passing a list of input strings and writing the result at the end.

#### Calculator.ts

```ts
export class Calculator {
  private current = 0;
  private memory = 0;
  private operator: string;

  protected processDigit(digit: string, currentValue: number) {
    if (digit >= "0" && digit <= "9") {
      return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
    }
  }

  protected processOperator(operator: string) {
    if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
      return operator;
    }
  }

  protected evaluateOperator(
    operator: string,
    left: number,
    right: number
  ): number {
    switch (this.operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
    }
  }

  private evaluate() {
    if (this.operator) {
      this.memory = this.evaluateOperator(
        this.operator,
        this.memory,
        this.current
      );
    } else {
      this.memory = this.current;
    }
    this.current = 0;
  }

  public handleChar(char: string) {
    if (char === "=") {
      this.evaluate();
      return;
    } else {
      let value = this.processDigit(char, this.current);
      if (value !== undefined) {
        this.current = value;
        return;
      } else {
        let value = this.processOperator(char);
        if (value !== undefined) {
          this.evaluate();
          this.operator = value;
          return;
        }
      }
    }
    throw new Error(`Unsupported input: '${char}'`);
  }

  public getResult() {
    return this.memory;
  }
}

export function test(c: Calculator, input: string) {
  for (let i = 0; i < input.length; i++) {
    c.handleChar(input[i]);
  }

  console.log(`result of '${input}' is '${c.getResult()}'`);
}
```

Here is a simple test for the calculator using the exposed `test` function.

#### TestCalculator.ts

```ts
import { Calculator, test } from "./Calculator";

let c = new Calculator();
test(c, "1+2*33/11="); // prints 9
```

Now to extend this to add support for input with numbers in bases other than 10, let's create `ProgrammerCalculator.ts`

#### ProgrammerCalculator.ts

```ts
import { Calculator } from "./Calculator";

class ProgrammerCalculator extends Calculator {
  static digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  constructor(public base: number) {
    super();
    const maxBase = ProgrammerCalculator.digits.length;
    if (base <= 0 || base > maxBase) {
      throw new Error(`base has to be within 0 to ${maxBase} inclusive.`);
    }
  }

  protected processDigit(digit: string, currentValue: number) {
    if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
      return (
        currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit)
      );
    }
  }
}

// Export the new extended calculator as Calculator
export { ProgrammerCalculator as Calculator };

// Also, export the helper function
export { test } from "./Calculator";
```

The new module `ProgrammerCalculator` exports an API shape similar to that of the original `Calculator` module, but does not augment any objects in the original module.
Here is a test for our ProgrammerCalculator class:

#### TestProgrammerCalculator.ts

```ts
import { Calculator, test } from "./ProgrammerCalculator";

let c = new Calculator(2);
test(c, "001+010="); // prints 3
```

### Do not use namespaces in modules

When first moving to a module-based organization, a common tendency is to wrap exports in an additional layer of namespaces.
Modules have their own scope, and only exported declarations are visible from outside the module.
With this in mind, namespace provide very little, if any, value when working with modules.

On the organization front, namespaces are handy for grouping together logically-related objects and types in the global scope.
For example, in C#, you're going to find all the collection types in System.Collections.
By organizing our types into hierarchical namespaces, we provide a good "discovery" experience for users of those types.
Modules, on the other hand, are already present in a file system, necessarily.
We have to resolve them by path and filename, so there's a logical organization scheme for us to use.
We can have a /collections/generic/ folder with a list module in it.

Namespaces are important to avoid naming collisions in the global scope.
For example, you might have `My.Application.Customer.AddForm` and `My.Application.Order.AddForm` -- two types with the same name, but a different namespace.
This, however, is not an issue with modules.
Within a module, there's no plausible reason to have two objects with the same name.
From the consumption side, the consumer of any given module gets to pick the name that they will use to refer to the module, so accidental naming conflicts are impossible.

> For more discussion about modules and namespaces see [Namespaces and Modules](/docs/handbook/namespaces-and-modules.html).

### Red Flags

All of the following are red flags for module structuring. Double-check that you're not trying to namespace your external modules if any of these apply to your files:

- A file whose only top-level declaration is `export namespace Foo { ... }` (remove `Foo` and move everything 'up' a level)
- Multiple files that have the same `export namespace Foo {` at top-level (don't think that these are going to combine into one `Foo`!)
