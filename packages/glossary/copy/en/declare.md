---
display: "Declare"
tags: typescript types keyword
---

* `declare` keyword
  * uses
    * 👁️inform variable exists | TypeScript [Type System](#type-system), EVEN if it can NOT be found | current source code 👁️
* _Example:_

    ```ts twoslash
    // Declare that a ghost exists / has a function called "boo"
    declare const ghost: { boo: () => void };
    
    ghost.boo();
    ```

    TS -- would [emit](#emit) -- JavaScript code like

    ```ts twoslash
    // @showEmit
    // Declare that a ghost exists / has a function called "boo"
    declare const ghost: { boo: () => void };
    
    ghost.boo();
    ```
