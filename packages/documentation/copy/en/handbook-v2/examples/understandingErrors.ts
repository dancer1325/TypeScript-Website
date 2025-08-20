// 1. error syntax
// 1.1 NOT assignable
let a: { m: number[] };
let b = { m: [""] };
a = b;    // check error message

// 1.2 extra properties
type A = { m: number };
const a: A = { m: 10, n: "" };
