
//                                                        Defining types
//                == JS types + any + unknown + never + void
let anyType: any;
anyType = 1;
// @ts-ignore       allow bigint
anyType = 2n;
anyType = "hello";
anyType = true;
anyType = null;

let unknownType: unknown;
unknownType = 2;
unknownType = 'hello';
// Enforce to check the type previous to use it -- uncomment next line --
//console.log(unknownType + 5);

/**
 * Impossible that something is returned
 * @param message
 */
function throwError(message: string): never {
  throw new Error(message);
}

/**
 * Absence of value is returned
 * @param message
 */
function logMessage(message: string): void {
  console.log(message);
}
