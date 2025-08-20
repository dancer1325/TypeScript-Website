

//                                       --    unknown    --
// unknown === any, but safer, since it's not all allowed
// 1. as function's argument, accepts any value, but not any
function f1(a: any) {
  console.log("[f1] typeof a " + typeof a);
  a.b();
}
// Next cases will work at compile time, but not a compilation time
//f1(2);
//f1("Alfredo");
//f1({b:22});
f1({b:function(){return "Hello b function"}});

function f2(a: unknown) {
  // Next ones are not valid
  //a.b();      //  1. property
  //a + 3       //  2. binary operations

  // Generic type operations will be allowed, but no operations with the value
  console.log("[f2] typeof a " + typeof a);
}
f2(2);

// 2. as function's return
function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
// Add proper json in string
//const obj = safeParse("someRandomString");
//const obj = safeParse("{someRandomString}");
//const obj = safeParse("{someRandomString:a}");
const obj = safeParse('{"someRandomString":"a"}');
console.log("obj is " + obj + " and it's typeof obj " + typeof obj);


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