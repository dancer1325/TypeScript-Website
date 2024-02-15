

# Defining types
## built-in
* Check 'definingtypesBuiltIn.ts'
* JS types
* `any`
  * allow anything
* `unknown`
  * === `any` ⚠️ but enforce to check the type before to use it ⚠️
* `never`
  * impossible this type happens
* `void`
  * uses
    * function which returns
      * `undefined` or
      * nothing returned
## custom
* Check 'definingtypesCustom.ts'
* via `interface`
  * valid for
    * objects
    * classes
  * uses
    * function’s arguments
    * function’s return values
* via `type`
  * valid for
    * objects

# interface vs type
* Check '../playground-examples/../Types vs Interfaces.ts'
* Pretty similar to create objects
* Possible to intermix their use
* support being extended
  * `type` via `&`
    * if some type’s properties have default values & you want to create an object → REDUNDANT to specify it
  * `interface` via `extends`
    * although some interface’s properties have default values & you want to create an object → NEED to specify it
    * NOT possible to extend an unionType -- Check '../handbook/everydayTypes'
* Typescript gives better error messages for `interface`
* `type` are closed and `interface` are open

# How to run locally?
* `tsc NameOfTheFile.ts` and check that
    * no errors appear
    * generates a .js file
* `node NameOfTheFile.js` and check that
    * all works fine