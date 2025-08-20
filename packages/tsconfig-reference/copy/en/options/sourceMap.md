---
display: "Source Map"
oneline: "Create source map files for emitted JavaScript files."
---

* 👁️Enables the generation of [sourcemap files](https://developer.mozilla.org/docs/Tools/Debugger/How_to/Use_a_source_map) 👁️
* uses
  * by debuggers & other tools -- to display the -- original TypeScript source code / emitted JavaScript files were working
* -- are emitted as -- `.js.map` OR `.jsx.map` files / close to the corresponding `.js` output file
* `.js` files -- will in turn contain a -- sourcemap comment / indicate where the files are to external tools

* _Example:_ "helloWorld.ts"
  * Problems:
    * Problem1: NO sourcemap file is generated
      * Attempt1: `tsc helloworld.ts --project tsconfig.json`
      * Solution: specify `files` & run `tsc --project tsconfig.json`

  ```ts
  // helloWorld.ts
  export declare const helloWorld = "hi";
  ```

  ```js
  // helloWorld.js
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.helloWorld = "hi";
  //# sourceMappingURL=// helloWorld.js.map
  ```


  ```json
  // helloWorld.js.map
  {
    "version": 3,
    "file": "ex.js",
    "sourceRoot": "",
    "sources": ["../ex.ts"],
    "names": [],
    "mappings": ";;AAAa,QAAA,UAAU,GAAG,IAAI,CAAA"
  }
  ```
