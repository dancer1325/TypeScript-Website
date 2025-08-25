---
display: "Strict Null Checks"
oneline: "When type checking, take into account `null` and `undefined`."
---

* `strictNullChecks`
  * if `false` -> `null` & `undefined` -> 
    * ALLOWED
      * Reason:🧠`undefined` == being removed | type system🧠
    * | runtime, can lead -- to -- unexpected errors 
  * if `true` -> `null` & `undefined`
    * are DISTINCT types
    * if you use them -> you'll get a type error
