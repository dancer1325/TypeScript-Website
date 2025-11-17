---
display: "Type System"
tags: typescript abstract
---

* JavaScript language has 👁️NOT static type system 👁️
  * available types
    * `string`
    * `boolean`
    * `object`
    * `symbol`
* **STATIC** type system  (normally) == "type system"
  * -> NO need to run your code -- to get the [Shape](#shape) 
* TypeScript provides **STATIC** type system
  * ->
    * editing tools 

    ```ts twoslash
    // @noErrors
    const shop = {
      name: "Table Store",
      address: "Maplewood",
    };
    
    shop.a;
    //    ^|
    ```

    * if types do NOT match up -> rich set of error messages

    ```ts twoslash
    // @errors: 2322
    let shop = {
      name: "Table Store",
      address: "Maplewood",
    };
    
    shop = {
      nme: "Chair Store",
      address: "Maplewood",
    };
    ```
