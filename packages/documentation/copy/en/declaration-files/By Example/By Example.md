---
title: Declaration Reference
layout: docs
permalink: /docs/handbook/declaration-files/by-example.html
oneline: "How to create a d.ts file for a module"
---

* goal
  * how to write declaration files / EACH common API pattern (use case + sample usage)

## Objects with Properties

* _Example:_
  * `myLib`
    * global variable
    * `makeGreeting` 
      * function / create greetings
    * `numberOfGreetings`
      * property / indicate the # of greetings made so far
  * sample usage

    ```ts
    let result = myLib.makeGreeting("hello, world");
    console.log("The computed greeting is:" + result);
    
    let count = myLib.numberOfGreetings;
    ```
  * declaration file
    * 💡`declare namespace` 💡
      * describe types or values / -- accessed by -- dotted notation 

        ```ts
      
        declare namespace myLib {
          function makeGreeting(s: string): string;
          let numberOfGreetings: number;
        }
        ```

## Overloaded Functions

* _Example:_ 
  * `getWidget`
    * function / 
      * arguments: number or string
      * returns a Widget or Widget[]
  * sample usage
    ```ts
    let x: Widget = getWidget(43);
    
    let arr: Widget[] = getWidget("all of them");
    ```
  * declaration file

    ```ts
    declare function getWidget(n: number): Widget;
    declare function getWidget(s: string): Widget[];
    ```

## Reusable Types (Interfaces)

* _Example:_ 
  * `GreetingSettings` object /
    * `greet`'s argument
    * properties
      * greeting: Mandatory string
      * duration: Optional length of time (in milliseconds)
      * color: Optional string, e.g. '#ff00ff'

  * sample usage

    ```ts
    greet({
      greeting: "hello world",
      duration: 4000
    });
    ```
  * declaration file

    ```ts
    // `interface` -- to define a -- type with properties
    interface GreetingSettings {
      greeting: string;
      duration?: number;
      color?: string;
    }
    
    declare function greet(setting: GreetingSettings): void;
    ```

## Reusable Types (Type Aliases)

* _Example:_ 
  * if greeting is expected -> you can provide a
    * `string`
    * function / return a `string` or
    * `Greeter` instance
  * sample usage 

    ```ts
    function getGreeting() {
      return "howdy";
    }
    class MyGreeter extends Greeter {}
    
    greet("hello");
    greet(getGreeting);
    greet(new MyGreeter());
    ```

  * declaration file 

  ```ts
  // type alias
  type GreetingLike = string | (() => string) | MyGreeter;
  
  declare function greet(g: GreetingLike): void;
  ```

## Organizing Types

* _Example:_
  * `Greeter`
    * `.log(logOptions)` -- log | a file --
    * `.alert(alertOptions)` -- display an alert --
  * sample usage

  ```ts
  const g = new Greeter("Hello");
  g.log({ verbose: true });
  g.alert({ modal: false, title: "Current Greeting" });
  ```

  * declaration file
  ```ts
  // using namespace -- to organize -- types
  declare namespace GreetingLib {
    interface LogOptions {
      verbose?: boolean;
    }
    interface AlertOptions {
      modal: boolean;
      title?: string;
      color?: string;
    }
  }
  ```

  ```ts
  // nested namespaces | declaration
  declare namespace GreetingLib.Options {
    // Refer to via GreetingLib.Options.Log
    interface Log {
      verbose?: boolean;
    }
    interface Alert {
      modal: boolean;
      title?: string;
      color?: string;
    }
  }
  ```

## Classes

* _Example:_ 
  * `Greeter` object
  * extend from `Greeter` 

  * sample usage
  ```ts
  const myGreeter = new Greeter("hello, world");
  myGreeter.greeting = "howdy";
  myGreeter.showGreeting();
  
  class SpecialGreeter extends Greeter {
    constructor() {
      super("Very special greetings");
    }
  }
  ```

  * declaration files
    * `declare class` -- to describe a -- class OR class-like object
    ```ts
    declare class Greeter {
      constructor(greeting: string);
    
      greeting: string;
      showGreeting(): void;
    }
    ```

## Global Variables

* _Example:_ 
  * global variable `foo`
  * sample usage
    ```ts
    console.log("Half the number of widgets is " + foo / 2);
    ```
  * declaration files
    * `declare var` -- to declare -- variables
      * if the variable is read-only -> you can use `declare const`
      * if the variable is block-scoped -> use `declare let`
    ```ts
    /** The number of widgets present */
    declare var foo: number;
    ```

## Global Functions

* _Example:_ 
  * `greet(string)`

  * sample usage
  ```ts
  greet("hello, world");
  ```

  * declaration files
    * `declare function` -- to declare -- functions

      ```ts
      declare function greet(greeting: string): void;
      ```
