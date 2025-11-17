// 1. ways
// 1.1 `... as concreteType`
let someValue: unknown = "Hello, TypeScript!";
let someValueAssertedByAS = someValue as string;
console.log("typeof someValueAssertedByAS ", typeof someValueAssertedByAS);
// 1.2 `<concreteType>...`
const someValueAssertedByBracket = <String>someValue;
console.log("typeof someValueAssertedByBracket ", typeof someValueAssertedByBracket);

// 2. if 2 types are COMPLETELY incompatible -> error | compile time
// const x = "hello" as number;   // UNCOMMENT to see error

// 3. too conservative
// 3.1   1! direct assertion -> it fails
//let strError = "123" as number;  // Error: Cannot convert string to number

// 3.2  2 assertions  -> it works
let strFine = "123" as unknown as number;
console.log("typeof strFine ", typeof strFine);   // | runtime, type NOT modified
