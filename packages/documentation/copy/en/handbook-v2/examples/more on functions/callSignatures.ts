// call signature
type DescribableFunction = {
  description: string;            // define property
  (someArg: number): boolean;     // desired function itself
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);
