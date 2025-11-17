---
display: "Index Signature"
tags: typescript types
---

* index signature
  * == way to define the 👁️[Shape](#shape) of fields / NOT known ahead of time 👁️
    * -> can be applied |
      * `interface`
      * `type`
* _Example:_

    ```ts twoslash
    type MathConstants = {
      pi: 3.14159;
      phi: 1.61803;
    
      [key: string]: number;    // index signature
    };
    
    interface ModernConstants {
      taniguchi: 0.6782344919;
      raabe: 0.9189385332;
    
      [key: string]: number;    // index signature
    }
    ```

* _Example:_ | [Declared](#declare) instance of an interface

```ts twoslash
interface ModernConstants {
  taniguchi: 0.6782344919;
  raabe: 0.9189385332;

  [key: string]: number;
}
// ---cut---
declare const modernConstants: ModernConstants;

// This was defined earlier
modernConstants.raabe;
//              ^?

// This field was not defined above, so it can be ONLY `number`
modernConstants.lebesgue;       // dot notation
modernConstants["lebesgue"];    // quote notation
//              ^?
```

* [`noPropertyAccessFromIndexSignature`](/tsconfig#noPropertyAccessFromIndexSignature)
  * ⚠️TSConfig flag / enforce using quote notation instead of dot notation ⚠️
    * -> use an index signature explicit | calling code
  * from TypeScript v4.1+

