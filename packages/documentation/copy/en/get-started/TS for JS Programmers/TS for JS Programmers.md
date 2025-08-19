---
title: TypeScript for JavaScript Programmers
short: TypeScript for JS Programmers
layout: docs
permalink: /docs/handbook/typescript-in-5-minutes.html
oneline: Learn how TypeScript extends JavaScript
---

* TypeScript
  * 💡's features == JavaScript's features + TypeScript's type system💡
    * JavaScript's features
      * classes
      * OOP
    * -> working JS code -> working TS code

* TypeScript's type system
  * allows
    * check types
      * -> == lower bugs 
    * [infer types](#ts-infers-types)

## TS infers types

* infer types -- based on -- it's value
* use cases
  * create a variable
  * assign a variable | particular value

## Defining Types

### built-in
* JS primitive types
  * `boolean`,
  * `bigint`,
  * `null`,
  * `number`,
  * `string`,
  * `symbol`,
  * `undefined`

* TS primitive types
  * JS primitive types
  * [`any`](#any)
  * [`unknown`](#unknown)
  * [`never`](#never)
  * [`void`](#void)

#### `any`
* allow anything

#### `unknown`
* 's uses
  * can be wide
  * _Example:_ wrap a JSON parser
* === `any` + ⚠️enforce to check the type BEFORE using it ⚠️
* [release notes](/packages/documentation/copy/en/release-notes/TypeScript%203.0.md#new-unknown-top-type)
* [MORE](/packages/playground-examples/copy/en/TypeScript/Primitives/Unknown%20and%20Never.ts)

#### `never`
* ❌this type can NOT happen❌
  * ALTHOUGH you can pass -- around -- OTHER values
* | union,
  * AUTOMATICALLY removed
    * Reason:🧠| runtime, impossible to assign `never`🧠
* uses
  * code flow analysis
  * function / returns `never`, to handle
    * JS runtime
    * API consumers / NOT use types
  * display better error messages
  * close resources
    * _Example:_ files or loops
  * exhaustive switch
* [MORE](/packages/playground-examples/copy/en/TypeScript/Primitives/Unknown%20and%20Never.ts) 

#### `void`
* uses
  * function / 
    * returns `undefined`
    * NO return value

### custom

* == syntaxes / build types
* [_Example:_](/packages/playground-examples/copy/en/TypeScript/Language%20Extensions/Types%20vs%20Interfaces.ts)

#### `interface`

* 
  ```
  interface InterfaceName {
    key1: value1;
    ...
  }
  ```
* preferred
* supports
  * extension -- via -- `extends`
    * | union type,
      * ❌NOT ALLOWED❌
* error messages
  * rich
* ALTHOUGH some interface's properties have default values -> ⚠️| initialize an object, you need to specify it⚠️
* open
  * == POSSIBLE to redeclare
* uses
  * object declaration
  * classes
  * function's
    * arguments
    * returned values

#### `type`
* supports
  * extension -- via -- `&`
* uses
  * you need SPECIFIC features
  * object declaration
* ❌NOT uses❌
  * classes
* error messages
  * poor
* closed
  * == ❌NOT possible to redeclare❌

## Composing Types

* TODO:
With TypeScript, you can create complex types by combining simple ones
* There are two popular ways to do so: with unions, and with generics.

### Unions

With a union, you can declare that a type could be one of many types
* For example, you can describe a `boolean` type as being either `true` or `false`:

```ts twoslash
type MyBool = true | false;
```

_Note:_ If you hover over `MyBool` above, you'll see that it is classed as `boolean`
* That's a property of the Structural Type System
* More on this below.

A popular use-case for union types is to describe the set of `string` or `number` [literals](/docs/handbook/2/everyday-types.html#literal-types) that a value is allowed to be:

```ts twoslash
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

Unions provide a way to handle different types too
* For example, you may have a function that takes an `array` or a `string`:

```ts twoslash
function getLength(obj: string | string[]) {
  return obj.length;
}
```

To learn the type of a variable, use `typeof`:

| Type      | Predicate                          |
| --------- | ---------------------------------- |
| string    | `typeof s === "string"`            |
| number    | `typeof n === "number"`            |
| boolean   | `typeof b === "boolean"`           |
| undefined | `typeof undefined === "undefined"` |
| function  | `typeof f === "function"`          |
| array     | `Array.isArray(a)`                 |

For example, you can make a function return different values depending on whether it is passed a string or an array:

<!-- prettier-ignore -->
```ts twoslash
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
//          ^?
  }
  return obj;
}
```

### Generics

Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

You can declare your own types that use generics:

```ts twoslash
// @errors: 2345
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
```

## Structural Type System

One of TypeScript's core principles is that type checking focuses on the _shape_ that values have. This is sometimes called "duck typing" or "structural typing".

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

```ts twoslash
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

The `point` variable is never declared to be a `Point` type. However, TypeScript compares the shape of `point` to the shape of `Point` in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object's fields to match.

```ts twoslash
// @errors: 2345
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
// ---cut---
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color);
```

There is no difference between how classes and objects conform to shapes:

```ts twoslash
// @errors: 2345
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
// ---cut---
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

## Next Steps

This was a brief overview of the syntax and tools used in everyday TypeScript. From here, you can:

- Read the full Handbook [from start to finish](/docs/handbook/intro.html)
- Explore the [Playground examples](/play#show-examples)
