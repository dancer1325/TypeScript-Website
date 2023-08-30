

//                                                    --    values    --

// 1. value-level function  -- Typically in JS --
const doSomething = (a, b) => console.log("a " + a + " b " + b);

// 2. type-level function   -- Typically in TS --
// <A, B>       are type parameters
// a: A, b: B   are value parameterss
function genericFunctionName<A, B>(a: A, b: B) {
  console.log("a " + a);
  console.log("b " + b);
}
// TODO: Add examples and checks of all things which can be values