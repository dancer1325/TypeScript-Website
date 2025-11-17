---
title: "Global: Modifying Module"
layout: docs
permalink: /docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html
---

## _Global-modifying Modules_

* _global-modifying module_
  * existing values | global scope -- are altered | import them

* _Example:_ library / adds NEW members to `String.prototype` | import them
  * NOT recommended
    * Reason: 🧠dangerous pattern -- due to the -- possibility of runtime conflicts 🧠
    * ALTHOUGH, we can STILL write a declaration file

## Identifying global-modifying modules

* easy to identify -- from -- their documentation
  * == global plugins + `require` call / activate their effects

* _Example:_ 

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

    declaration file could be

    ```ts
    // Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
    // Project: [~THE PROJECT NAME~]
    // Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>
    
    /*~ This is the global-modifying module template file. You should rename it to index.d.ts
     *~ and place it in a folder with the same name as the module.
     *~ For example, if you were writing a file for "super-greeter", this
     *~ file should be 'super-greeter/index.d.ts'
     */
    
    /*~ Note: If your global-modifying module is callable or constructable, you'll
     *~ need to combine the patterns here with those in the module-class or module-function
     *~ template files
     */
    declare global {
      /*~ Here, declare things that go in the global namespace, or augment
       *~ existing declarations in the global namespace
       */
      interface String {
        fancyFormat(opts: StringFormatOptions): string;
      }
    }
    
    /*~ If your module exports types or values, write them as usual */
    export interface StringFormatOptions {
      fancinessLevel: number;
    }
    
    /*~ For example, declaring a method on the module (in addition to its global side effects) */
    export function doSomething(): void;
    
    /*~ If your module exports nothing, you'll need this line. Otherwise, delete it */
    export {};
    ```
