// 1. cases /     undefined | JS   vs error | TS
// 1.1 access an object's property / NOT exist
const user = {
  name: "Daniel",
  age: 26,
};

console.log("user.location ", user.location);   // user.location     undefined
