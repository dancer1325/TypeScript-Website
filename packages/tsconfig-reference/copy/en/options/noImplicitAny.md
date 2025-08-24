---
display: "No Implicit Any"
oneline: "Enable error reporting for expressions and declarations with an implied `any` type."
---

* `any`
  * == TypeScript's fall back type | there are NO type annotations & can NOT infer the type

* `noImplicitAny`
  * if `false` & you miss type as `any` & fall back | `any` -> NO error
  * if `true`  & you miss type as `any` & fall back | `any` -> throw an error
