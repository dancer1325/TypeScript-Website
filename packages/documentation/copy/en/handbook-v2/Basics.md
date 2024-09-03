---
title: The Basics
layout: docs
permalink: /docs/handbook/2/basic-types.html
oneline: "Step one in learning TypeScript: The basic types."
preamble: >
  <p>Welcome to the first page of the handbook. If this is your first experience with TypeScript - you may want to start at one of the '<a href='https://www.typescriptlang.org/docs/handbook/intro.html#get-started'>Getting Started</a>' guides</a>
---

* EVERY value | JavaScript has a set of behaviors (==methods) / 
  * if we do NOT know the value of (`message` | _Example_ )  -> we can NOT know beforehand the output / line
  * -- can be observed from -- running different operations
    * _Example:_ 

      ```js
      // 1. access the property 'toLowerCase' | 'message' & 2. calling it
      message.toLowerCase();
        
      // Call 'message' directly
      message();
      ```
  * behavior of each operation -- depends entirely on the -- value & 👁️we must trust ALL it's as expected | JS 👁️
    * typical questions to wonder | lines of code
      * is the value callable?
      * Does it indeed have the corresponding property?
      * if it does, is the method even callable?
      * if both of these values are callable, what do they return?
    * if we make a mistake rethinking -> we get an exception
      * _Example:_ 

    ```js
    const message = "Hello World!";
    
    // Running previous code -> we get TypeError: message is not a function
    ```

* TODO:
When we run our code, the way that our JavaScript runtime chooses what to do is by figuring out the _type_ of the value - what sorts of behaviors and capabilities it has.


For some values, such as the primitives `string` and `number`, we can identify their type at runtime using the `typeof` operator.
But for other things like functions, there's no corresponding runtime mechanism to identify their types.
For example, consider this function:

```js
function fn(x) {
  return x.flip();
}
```

We can _observe_ by reading the code that this function will only work if given an object with a callable `flip` property, but JavaScript doesn't surface this information in a way that we can check while the code is running.
The only way in pure JavaScript to tell what `fn` does with a particular value is to call it and see what happens.
This kind of behavior makes it hard to predict what the code will do before it runs, which means it's harder to know what your code is going to do while you're writing it.

Seen in this way, a _type_ is the concept of describing which values can be passed to `fn` and which will crash.
JavaScript only truly provides _dynamic_ typing - running the code to see what happens.

* TODO: Check where to add
* Reason: [ECMAScript specification](https://tc39.github.io/ecma262/)

The alternative is to use a _static_ type system to make predictions about what code is expected _before_ it runs.

## Static type-checking

* TypeScript
  * == static type-checker
* _Static types systems_
  * -- describe the -- shapes & behaviors | running our programs
    * 👁️-> avoid errors | runtime 👁️

  ```ts twoslash
  // @errors: 2349
  const message = "hello!";
  
  message();
  ```

## Non-exception Failures

* == cases / NO errors | JS
* if you try to access a property / does NOT exist | object -> 
  * 👁 |(JS)   ️ returns the value `undefined` 👁️
    * error thrown would have been expected
    * _Example:_

    ```js
    const user = {
      name: "Daniel",
      age: 26,
    };
  
    user.location; // returns undefined
    ```

  * 👁 |(TS)   ️ throws an error 👁️
    * _Example:_

  ```ts twoslash
  // @errors: 2339
  const user = {
    name: "Daniel",
    age: 26,
  };
  
  user.location;
  ```

* TS catch legitimate bugs
  * typos

  ```ts twoslash
  // @noErrors
  const announcement = "Hello World!";
  
  // How quickly can you spot the typos?
  announcement.toLocaleLowercase();
  announcement.toLocalLowerCase();
  
  // We probably meant to write this...
  announcement.toLocaleLowerCase();
  ```

  * uncalled functions

  ```ts twoslash
  // @noUnusedLocals
  // @errors: 2365
  function flipCoin() {
    // Meant to be Math.random()
    return Math.random < 0.5;
  }
  ```

  * basic logic errors

  ```ts twoslash
  // @errors: 2367
  const value = Math.random() < 0.5 ? "a" : "b";
  if (value !== "a") {
    // ...
  } else if (value === "b") {
    // Oops, unreachable
  }
  ```

## Types for Tooling or Tooling | TS

* == editor 
  * can
    * suggest code completion
    * highlight code error
    * refactor to easily re-organize code
    * navigation features
    * 
  * vs static type-checking
    * 👁️ DONE, after 👁️
    * built on top of it
  * _Example:_

  <!-- prettier-ignore -->
  ```ts twoslash
  // @noErrors
  // @esModuleInterop
  import express from "express";
  const app = express();
  
  app.get("/", function (req, res) {
    res.sen
  //       ^|   code completion while you are typing 
  });
  
  app.listen(3000);
  ```

* [editors with TypeScript support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support)

## `tsc`, the TypeScript compiler

* ways to get it 
  * `npm install -g typescript`
    * install it globally
  * `npx tsc`
    * got from a local `node_modules` package
* `tsc fileName.ts`
  * if there is NO error -> generate "fileName.js" / 
    * keep comments
    * indents consistently 

## Emitting with Errors

* `tsc --noEmitOnError fileName.ts`
  * if there is some error -> NO ".js" is generated
  * uses
    * if you migrate a project | JS -> project | TS
      * Reason: 🧠 the project previously existed | JS -> it should NOT block it 🧠
  * [`noEmitOnError`](/tsconfig#noEmitOnError)

## Explicit Types

* TODO:
Up until now, we haven't told TypeScript what `person` or `date` are.
Let's edit the code to tell TypeScript that `person` is a `string`, and that `date` should be a `Date` object.
We'll also use the `toDateString()` method on `date`.

```ts twoslash
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

What we did was add _type annotations_ on `person` and `date` to describe what types of values `greet` can be called with.
You can read that signature as "`greet` takes a `person` of type `string`, and a `date` of type `Date`".

With this, TypeScript can tell us about other cases where `greet` might have been called incorrectly.
For example...

```ts twoslash
// @errors: 2345
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", Date());
```

Huh?
TypeScript reported an error on our second argument, but why?

Perhaps surprisingly, calling `Date()` in JavaScript returns a `string`.
On the other hand, constructing a `Date` with `new Date()` actually gives us what we were expecting.

Anyway, we can quickly fix up the error:

```ts twoslash {4}
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

Keep in mind, we don't always have to write explicit type annotations.
In many cases, TypeScript can even just _infer_ (or "figure out") the types for us even if we omit them.

```ts twoslash
let msg = "hello there!";
//  ^?
```

Even though we didn't tell TypeScript that `msg` had the type `string` it was able to figure that out.
That's a feature, and it's best not to add annotations when the type system would end up inferring the same type anyway.

> Note: The message bubble inside the previous code sample is what your editor would show if you had hovered over the word.

## Erased Types

Let's take a look at what happens when we compile the above function `greet` with `tsc` to output JavaScript:

```ts twoslash
// @showEmit
// @target: es5
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

Notice two things here:

1. Our `person` and `date` parameters no longer have type annotations.
2. Our "template string" - that string that used backticks (the `` ` `` character) - was converted to plain strings with concatenations.

More on that second point later, but let's now focus on that first point.
Type annotations aren't part of JavaScript (or ECMAScript to be pedantic), so there really aren't any browsers or other runtimes that can just run TypeScript unmodified.
That's why TypeScript needs a compiler in the first place - it needs some way to strip out or transform any TypeScript-specific code so that you can run it.
Most TypeScript-specific code gets erased away, and likewise, here our type annotations were completely erased.

> **Remember**: Type annotations never change the runtime behavior of your program.

## Downleveling

One other difference from the above was that our template string was rewritten from

```js
`Hello ${person}, today is ${date.toDateString()}!`;
```

to

```js
"Hello ".concat(person, ", today is ").concat(date.toDateString(), "!");
```

Why did this happen?

Template strings are a feature from a version of ECMAScript called ECMAScript 2015 (a.k.a. ECMAScript 6, ES2015, ES6, etc. - _don't ask_).
TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES3 and ES5).
This process of moving from a newer or "higher" version of ECMAScript down to an older or "lower" one is sometimes called _downleveling_.

By default TypeScript targets ES3, an extremely old version of ECMAScript.
We could have chosen something a little bit more recent by using the [`target`](/tsconfig#target) option.
Running with `--target es2015` changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported.
So running `tsc --target es2015 hello.ts` gives us the following output:

```js
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```

> While the default target is ES3, the great majority of current browsers support ES2015.
> Most developers can therefore safely specify ES2015 or above as a target, unless compatibility with certain ancient browsers is important.

## Strictness

Different users come to TypeScript looking for different things in a type-checker.
Some people are looking for a more loose opt-in experience which can help validate only some parts of their program, and still have decent tooling.
This is the default experience with TypeScript, where types are optional, inference takes the most lenient types, and there's no checking for potentially `null`/`undefined` values.
Much like how `tsc` emits in the face of errors, these defaults are put in place to stay out of your way.
If you're migrating existing JavaScript, that might be a desirable first step.

In contrast, a lot of users prefer to have TypeScript validate as much as it can straight away, and that's why the language provides strictness settings as well.
These strictness settings turn static type-checking from a switch (either your code is checked or not) into something closer to a dial.
The further you turn this dial up, the more TypeScript will check for you.
This can require a little extra work, but generally speaking it pays for itself in the long run, and enables more thorough checks and more accurate tooling.
When possible, a new codebase should always turn these strictness checks on.

TypeScript has several type-checking strictness flags that can be turned on or off, and all of our examples will be written with all of them enabled unless otherwise stated.
The [`strict`](/tsconfig#strict) flag in the CLI, or `"strict": true` in a [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) toggles them all on simultaneously, but we can opt out of them individually.
The two biggest ones you should know about are [`noImplicitAny`](/tsconfig#noImplicitAny) and [`strictNullChecks`](/tsconfig#strictNullChecks).

## `noImplicitAny`

Recall that in some places, TypeScript doesn't try to infer types for us and instead falls back to the most lenient type: `any`.
This isn't the worst thing that can happen - after all, falling back to `any` is just the plain JavaScript experience anyway.

However, using `any` often defeats the purpose of using TypeScript in the first place.
The more typed your program is, the more validation and tooling you'll get, meaning you'll run into fewer bugs as you code.
Turning on the [`noImplicitAny`](/tsconfig#noImplicitAny) flag will issue an error on any variables whose type is implicitly inferred as `any`.

## `strictNullChecks`

By default, values like `null` and `undefined` are assignable to any other type.
This can make writing some code easier, but forgetting to handle `null` and `undefined` is the cause of countless bugs in the world - some consider it a [billion dollar mistake](https://www.youtube.com/watch?v=ybrQvs4x0Ps)!
The [`strictNullChecks`](/tsconfig#strictNullChecks) flag makes handling `null` and `undefined` more explicit, and _spares_ us from worrying about whether we _forgot_ to handle `null` and `undefined`.
