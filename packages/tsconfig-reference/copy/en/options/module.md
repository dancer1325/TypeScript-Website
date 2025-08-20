---
display: "Module"
oneline: "Specify what module code is generated."
---

* allows
  * 👀sets the program's module system 👀
    * ALLOWED values
      * `CommonJS`
      * `umd`
      * `amd`
      * `es2015`
      * `esnext`
      * `system`
      * `none`
* if you change it -> affect [`moduleResolution`](moduleResolution.md) 
* see [modules](/packages/documentation/copy/en/handbook-v2/Modules.md)

# notes
## ES2010-ES6-ES2020-ES2022
* `ES2015`/`ES6`, `ES2020`
  * support
    * [dynamic `import`s](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
    * [`import.meta`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
* `ES2022`
  * support
    * [top level `await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await)

## `node16`/ `nodenext` (nightly builds)

* uses
  * | modern node projects
* requirements
  * TS 4.7+,
* integrates -- with -- Node's [native ECMAScript Module support](https://nodejs.org/api/esm.html)
* emitted JavaScript uses -- , based on file extension & "package.json"'s `type`, -- 
  * `CommonJS` output
  * `ES2020` output
* see [MORE](/packages/documentation/copy/en/reference/Modules.md)
