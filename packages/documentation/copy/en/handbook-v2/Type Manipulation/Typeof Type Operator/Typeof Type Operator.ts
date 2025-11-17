//  1. typeof in JS
// 1.1 in expression context
console.log("[JS]: " + typeof "Hello world");



// 2. typeof in TS
// 2.1 in expression context
console.log("[TS] for expression context " + typeof "Hello world");


// 2.2 in type context, for values
// 2.2.1 string
let s = "hello";
let n: typeof s;
console.log("[TS] for type context typeof s " + typeof s);
console.log("[TS] for type context typeof n " + typeof n);  // typeof (type) === undefined
// 2.2.2 number
let numberCase = 2;
console.log("[TS] numberCase is " + numberCase + " whose typeof numberCase " + typeof numberCase);

// 2.2.3 boolean
let booleanCase = true;
console.log("[TS] booleanCase is " + booleanCase + " whose typeof numberCase " + typeof booleanCase);

// 2.2.4 symbol
// let booleanCase = true;
// console.log("[TS] booleanCase is " + booleanCase + " whose typeof numberCase " + typeof booleanCase);

// 2.2.5 undefined


// 2.2.6 function




// 2.3 typeof + otherTypeOperators
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;       // boolean, since it's what Predicate returns

// a function declaration is a value (!= type)
function f() {
  return { x: 10, y: 3 };
}
// Next line doesn't work because f is value, and it's required a type
// type P = ReturnType<f>;
type P = ReturnType<typeof f>;


// 2.4 not valid for
// 2.4.1 values


