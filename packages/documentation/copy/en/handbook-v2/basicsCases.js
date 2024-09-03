
//                        -- static type-checking --
// 1. cases /     undefined | JS   vs error | TS
const user = {
  name: "Daniel",
  age: 26,
};

console.log("user.location ", user.location);   // user.location     undefined