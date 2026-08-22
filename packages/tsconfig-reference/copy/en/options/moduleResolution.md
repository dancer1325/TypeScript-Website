---
display: "Module Resolution"
oneline: "Specify how TypeScript looks up a file from a given module specifier."
---

* == module resolution strategy
  * ALLOWED values
    * `'node16'` OR `'nodenext'`
      * use cases   
        *  modern versions of Node.js
      * | Node.js v12+
        * support ECMAScript imports & CommonJS `require`
          * -> resolve -- via -- DIFFERENT algorithms
      * \+ [`module`](module.md) values,
        * picks the right algorithm / EACH resolution -- based on -- whether Node.js, | output JS code, see an 
          * `import` OR
          * `require` 
    * `'node10'` OR `'node'`
      * use cases
        * Node.js v10-
      * ONLY support
        * CommonJS `require`
    * `'bundler'` 
      * uses
        * with bundlers
      * vs Node.js resolution modes
        * BOTH support package.json `"imports"` & `"exports"`
        * `bundler` NEVER requires file extensions | relative paths | imports
    * `'classic'`
      * ❌NOT recommended❌
      * use cases
        * TypeScript v1.6-

* [MORE](../../../../documentation/copy/en/reference/Module%20Resolution.md)
