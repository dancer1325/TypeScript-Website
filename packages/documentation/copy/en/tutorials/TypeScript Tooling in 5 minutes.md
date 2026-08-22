---
title: TypeScript Tooling in 5 minutes
layout: docs
permalink: /docs/handbook/typescript-tooling-in-5-minutes.html
oneline: A tutorial to understand how to create a small website with TypeScript
translatable: true
---

* goal
  * how to build a simple web application -- via -- TS

## how to install TS (libraries + tsc)?

* ways to add TS | your project
  * -- via -- npm

    ```shell
    npm install -g typescript
    ```

  * install TS's Visual Studio plugins

* Visual Studio 2017 & Visual Studio 2015 Update 3
  * include by default,
    * TypeScript language support
      * NOT tsc

## how to compile your code?

* `tsc <FILE_NAME.ts>`
  * generate "FILE_NAME.js"

## type annotations

* allows
  * ⚠️| compile-time, get type errors⚠️
    * ALTHOUGH, it STILL creates "*.js"

## interfaces

Let's develop our sample further. Here we use an interface that describes objects that have a firstName and lastName field.
In TypeScript, two types are compatible if their internal structure is compatible.
This allows us to implement an interface just by having the shape the interface requires, without an explicit `implements` clause.

```ts twoslash
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);
```

* allows
  * describing objects
  * checking if types are compatibles
      * Check '../reference/Type Compatibility'
  * implementing without using `implements`

## classes

Finally, let's extend the example one last time with classes.
TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.

Here we're going to create a `Student` class with a constructor and a few public fields.
Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.

Also of note, the use of `public` on arguments to the constructor is a shorthand that allows us
to automatically create properties with that name.

```ts twoslash
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```

Re-run `tsc greeter.ts` and you'll see the generated JavaScript is the same as the earlier code.
Classes in TypeScript are just a shorthand for the same prototype-based OO that is frequently used in JavaScript.

## run your TS web app

Now type the following in `greeter.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TypeScript Greeter</title>
  </head>
  <body>
    <script src="greeter.js"></script>
  </body>
</html>
```

Open `greeter.html` in the browser to run your first simple TypeScript web application!

Optional: Open `greeter.ts` in Visual Studio, or copy the code into the TypeScript playground.
You can hover over identifiers to see their types.
Notice that in some cases these types are inferred automatically for you.
Re-type the last line, and see completion lists and parameter help based on the types of the DOM elements.
Put your cursor on the reference to the greeter function, and hit F12 to go to its definition.
Notice, too, that you can right-click on a symbol and use refactoring to rename it.

The type information provided works together with the tools to work with JavaScript at application scale.
For more examples of what's possible in TypeScript, see the Samples section of the website.

![Visual Studio picture](/images/docs/greet_person.png)
