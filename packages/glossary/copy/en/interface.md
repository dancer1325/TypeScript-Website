---
display: "Interface"
tags: typescript types keyword
---

* interface
  * == way to describe the [Shape](shape.md) of a JS object
* _Example:_ dog could be described in the following format

    ```ts twoslash
    interface Dog {
      name: string;
      dateOfBirth: Date;
      markings: string[];
    }
    ```

  ⭐️ == ONLY an object / has `name`, `dateOfBirth` & `markings` -- could be classed as a -- "Dog" | [Type System](type-system.md) ⭐
