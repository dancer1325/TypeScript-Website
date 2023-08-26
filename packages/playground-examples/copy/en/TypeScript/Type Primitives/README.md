Notes about the concepts explained here

## Built-in Utility Types
* `interface interfaceName {}`
  * Once it's compiled -> it doesn't generate JS code -> You can't create instances
  * If we create a class implementing this interface -> All properties are mandatory!!
* `Partial<Type>: AnotherType`
  * with all Type's properties are optional
* `Record<Keys, Type>`
  * Keys' entries — are mapped to → Type’s entries



## Notes
* How to test locally the examples?
  * `tsc FileName.ts`
    * Generate .js file
  * `node FileNameGenerated.js`
    * run .js file via node
