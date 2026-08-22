# Decorator

* `tsc --experimentalDecorators --target es2016 decorator.ts` & `node decorator.js` to test all

# Decorator factory

* `tsc --experimentalDecorators --target es2016 decoratorFactory.ts` & `node decoratorFactory.js` to test all
  
# Experimental Decorators
* `tsc --experimentalDecorators fileName.ts` / adding | "tsconfig.json"
  * `tsc --experimentalDecorators decorator.ts` 
    * check that it works fine
  * `tsc decorator.ts`
    * check that we get an error

# How has it been created?
* `tsc --init`
  * -> 'tsconfig.json' is created

# How to run locally?
* `tsc NameOfTheFile.ts` and check that
  * no errors appear
  * generates a .js file
* `node NameOfTheFile.js` and check that
  * all works fine