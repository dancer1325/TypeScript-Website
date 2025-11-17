//                                          --    never    --
// Next function never returns a type, since it always throws an error
function fail(msg: string): never {
  throw new Error(msg);
}
// If some part of the code is never reached -> some variable there has never type
function fn(x: string | number) {
  if (typeof x === "string") {
    console.log("x with typeof " + typeof x);
  } else if (typeof x === "number") {
    console.log("x with typeof " + typeof x);
  } else {
    x; // has type 'never'!, because it's never reached!!!
  }
}
