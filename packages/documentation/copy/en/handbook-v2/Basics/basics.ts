

//                        -- static type-checking --
// 1. error | compile time != runtime == previous to run the code
const message = "hello!";
//message();      // Uncomment to get the error

// 2. cases /     undefined | JS   vs error | TS
// 2.0
const user = {
  name: "Daniel",
  age: 26,
};

// console.log("user.location ", user.location);   // user.location     throws an error

// 2.1 legitimate bugs
// 2.1.1 typos
// @noErrors
const announcement = "Hello World!";

// How quickly can you spot the typos?  -- Uncomment to check the typo errors
/*announcement.toLocaleLowercase();
announcement.toLocalLowerCase();*/

// We probably meant to write this...
announcement.toLocaleLowerCase();

// 2.1.2 uncalled functions
// @noUnusedLocals
// @errors: 2365
function flipCoin() {
  // Meant to be Math.random()
  // return Math.random < 0.5;      -- Uncomment to check the typo errors
}

// 2.1.3 basic logic errors
// @errors: 2367
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
}
/*
else if (value === "b") {       -- Uncomment to check the typo errors
  // Oops, unreachable
}*/
