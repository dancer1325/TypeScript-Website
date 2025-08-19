---
title: Understanding Errors
layout: docs
permalink: /docs/handbook/2/understanding-errors.html
oneline: "How to read TypeScript errors."
---

# Understanding Errors

* if TypeScript finds an error -> tries to explain what went wrong
  * Reason:🧠thanks to its type system == structural🧠
* 👀syntax 👀
  ```
  error TS***: leading message
  sub message?      // OPTIONAL
  ```

## Terminology

### _assignable to_

* type2 _assignable to_ type1   
  * := type2 == acceptable substitute for type1
    * ❌NOT -> type1 == acceptable substitute for type2❌
  * _Examples
    * _Example1:_ `Cat` is _assignable to_ an `Animal`
      * == `Cat` is an acceptable substitute for an `Animal`
    * _Example2:_ | call a function,
      * EACH argument's type must be _assignable to_ parameter's declared type

* type2 _NOT assignable to_ type1
  * == type2 NOT compatible with type1
