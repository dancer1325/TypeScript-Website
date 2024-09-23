---
display: "Types vs Runtime"
tags: typescript javascript type-system
---

* TypeScript -- adds a -- "type layer" | JavaScript code
  * -- via -- adding syntax to JavaScript / is removed to run | JavaScript [runtime](#runtime)
* _Example1:_ JS code /  would run | JavaScript runtime

    ```ts
    const hello = "Hello world";
    ```
* _Example2:_ JS code /  would NOT run | JavaScript runtime

    ```ts
    const hello: string = "Hello world";
    // :string                code / ONLY exist | "type layer" of TS
    ```
