---
title: The Basics
layout: docs
permalink: /docs/handbook/2/basic-types.html
oneline: "Step one in learning TypeScript: The basic types."
preamble: >
  <p>Welcome to the first page of the handbook. If this is your first experience with TypeScript - you may want to start at one of the '<a href='https://www.typescriptlang.org/docs/handbook/intro.html#get-started'>Getting Started</a>' guides</a>
---

* 👀JS'
  * values' behaviors (==methods) 👀/ 
    * ⚠️you ONLY know the POSSIBLE behaviors | runtime (== execute them)⚠️
      * == ⭐️dynamic typing⭐️
    * -- depends entirely on the -- value
      * typical questions to wonder | lines of code
        * is the value callable?
        * Does it indeed have the corresponding property?
        * if it does, is the method even callable?
        * if both of these values are callable, what do they return?
  * ways to identify values' type
    * | primitives & functions,
      * -- via -- `typeof`
* type
  * := values / can be passed -- to a -- function

## Static type-checking

* TypeScript
  * == ⭐️static type-checker⭐️

* static type system
  * 👀ALTERNATIVE TO JS👀
  * allows
    * 👀BEFORE running a code, make predictions about the code's expectation👀
      * -> | runtime, avoid errors

## Non-exception failures

* == 👀cases / NO errors | JS👀

* access an object's property / NOT exist 
  * | JS,
    * returns `undefined` 
  * | TS,
    * throws an error 

* legitimate bugs / caught by Ts
  * typos
  * uncalled functions
  * basic logic errors

## Types for Tooling or Tooling | TS

* == IDE 
  * 's features
    * suggest code completion
    * highlight code error
    * refactor -- to -- easily re-organize code
    * navigation features
  * vs static type-checking
    * 👁️ DONE, AFTER 👁️
    * built | it
  * [/ TypeScript support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support)

## `tsc`, the TypeScript compiler

* ways to get it 
  * `npm install -g typescript`
    * install it globally
  * `npx tsc`
    * got -- from a -- local `node_modules` package
* `tsc fileName.ts` or `tsc`
  * if there is NO error -> generate "fileName.js" / 
    * keep comments
    * indents consistently 

## if there are errors -> NO emit 

* `tsc --noEmitOnError fileName.ts`
  * ❌if there is some error -> NO generate ".js" ❌
  * uses
    * if you migrate a project | JS -> project | TS
      * Reason: 🧠 the project previously existed | JS -> it should NOT block it 🧠
  * [`noEmitOnError`](/packages/tsconfig-reference/copy/en/options/noEmitOnError.md)

## Explicit Types

* == specify _type_
  * ALTHOUGH TS can infer types

## Erased Types

* 👀| compile to JS,
  * types are removed👀  
    * Reason: 🧠 NOT part of JS 🧠
    * | runtime behavior, NO change

## Downleveling

* := 💡process of rewriting code from newer version of ECMAScript -- to an -- older one💡
  * ⭐️by specifying [`--target`](/packages/tsconfig-reference/copy/en/options/target.md)⭐️

## Strictness

* == validate as you want
* ways to set
  * | CLI
    * `strict` 
      * enable ALL strict mode family options
    * specific type-checking strictness flags
      * [`noImplicitAny`](/tsconfig#noImplicitAny)
      * [`strictNullChecks`](/tsconfig#strictNullChecks)
      * ...
  * | "tsconfig.json"
    * `"strict"` 
      * enable ALL strict mode family options
    * specific type-checking strictness flags
      * [`noImplicitAny`](/tsconfig#noImplicitAny)
      * [`strictNullChecks`](/tsconfig#strictNullChecks)
      * ...

## `noImplicitAny`

* if TypeScript does NOT try to infer types -> falls back to `any`
* check [`noImplicitAny`](/tsconfig#noImplicitAny)
* == 👁️ if `noImplicitAny` is turn on & a variable / type -- is implicitly inferred as -- `any` ->  error thrown 👁️ 
* advantages
  * fewer bugs you will get

## `strictNullChecks`

* `null` and `undefined` -- are assignable to -- any other type 
* check [`strictNullChecks`](/tsconfig#strictNullChecks)
* == handling `null` and `undefined` MORE explicit
* advantages
  * NO _forget_ to handle `null` and `undefined` -> avoid errors
