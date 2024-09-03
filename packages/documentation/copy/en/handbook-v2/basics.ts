

//                        -- static type-checking --
// 1. error | compile time != runtime == previous to run the code
const message = "hello!";
//message();      // Uncomment to get the error

// 2. cases /     undefined | JS   vs error | TS
const user = {
  name: "Daniel",
  age: 26,
};

// console.log("user.location ", user.location);   // user.location     throws an error