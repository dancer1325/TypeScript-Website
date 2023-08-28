// 1. Type with properties specifically defined
type Point = { x: number; y: number };
type P = keyof Point;   // P would be "x" | "y"

let key1: P = "x";
let key2: P = "y";
//let key3: P = "z";        // Impossible to add random value

console.log(key1.toString());   // x
console.log(key2.toString());   // y



// 2. Type with an array of properties with
// 2.1 keys being number
// 2.2 values being unknown
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;    // number

// All the keys must be numbers and the values unknown
const arrayish: Arrayish = {
  0: "first",
  1: 42,
  2: true,
  3: { key: "value" },
}

//let keyArrayish: A = "2"      It must be a number
let keyArrayish: A = 2    // Any number could be assigned
let keyArrayishTwo: A = 5    // Any number could be assigned


// 3. Type with an array of properties with
// 3.1 keys being string
// 3.2 values being boolean
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;  // string | number

const mapish: Mapish = {
  isOld: false,
  isYoung: true,
  isSingle: true
}

let keyMapish: M = "vehicle";
let keyMapishTwo: M = "appartment";
