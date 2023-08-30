#[Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)

# How was it created?
* `tsc --init`
  * Create a TS project === 'tsconfig.json'

# How to run?
* `tsc `
  * Reason: You have got a 'tsconfig.json' file, so it would be wrong to specify `tsc fileName.ts`

# Notes
* Alternative to indicate to work with ES2015
  * `@ts-ignore` in each .ts file
* 'tsconfig.json'
  * lib
    * "DOM" -> we can include browser-specifics APIs