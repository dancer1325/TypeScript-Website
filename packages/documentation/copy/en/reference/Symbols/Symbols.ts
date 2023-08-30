// 1. Symbol as value           -- Just available from ES2015 --
let sym1 = Symbol();
let sym2 = Symbol("key"); // optional string description
let sym3 = Symbol(22); // optional number description

// TODO: Why do they refer to be immutable, since we can change it?
sym1 = Symbol(222);

// symbols are unique
let sym4 = Symbol("key");   // same description passed as sym2
console.log("sym2 == sym4 " + (sym2 == sym4));

// symbol as object property’s key
const sym = Symbol();
let obj = {
  [sym]: "value",
  sym: 22
};
console.log("obj[sym] " + obj[sym]);
// Wrapping under [] -> not accessible via regular property access syntax
//console.log("obj.[sym] " + obj.[sym]);
console.log("obj.sym " + obj.sym);

// declare class' members via symbol
const getClassNameSymbol = Symbol();
class C {
  // wrapped under [], to make it private
  [getClassNameSymbol]() {
    return "C";
  }
}
let c = new C();
let className = c[getClassNameSymbol](); // "C"

//                                --    unique    --