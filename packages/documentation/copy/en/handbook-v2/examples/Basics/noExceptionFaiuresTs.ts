// 1. cases /     undefined | JS   vs error | TS
// 1.1 access an object's property / NOT exist
const user = {
  name: "Daniel",
  age: 26,
};

// console.log("user.location ", user.location);   // user.location     throws an error

// 2. legitimate bugs / caught by Ts
// 2.1 typos
const announcement = "Hello World!";

// How quickly can you spot the typos?  -- Uncomment to check the typo errors
/*announcement.toLocaleLowercase();
announcement.toLocalLowerCase();*/

// We probably meant to write this...
announcement.toLocaleLowerCase();

// 2.2 uncalled functions
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
else if (value === "b") {       -- Uncomment to check the basic logic error
  // Oops, unreachable
}*/

