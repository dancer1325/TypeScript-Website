---
display: "Shape"
tags: typescript javascript
---

* "shape"
  * uses
    * describe the fields & values | JavaScript object
* _Example:_ let's have the JS object

    ```ts
    const house = {
      name: "Shibden hall",
      road: "Lister's Road",
      town: "Halifax",
      county: "West Yorkshire",
    };
    ```

    has the shape:

  - `name`: `string`
  - `road`: `string`
  - `town`: `string`
  - `country`: `string`

* TS can describe this shape -- via -- 2 different syntaxes
  * [Interfaces](#interface)
  * [Types](#type-literal)

* _Example:_

    ```ts
    interface House {
      name: string;
      road: string;
      town: string;
      country: string;
    }
    
    // or
    
    type House = {
      name: string;
      road: string;
      town: string;
      country: string;
    };
    ```
