// 1. JS values' ALLOWED behaviours are ONLY KNOWN | runtime
const message = "Hello World!";

message.toLowerCase();

// NOT ALLOWED          -- Reason: message is NOT a function --
// message();       // uncomment to check it

// 2. ways to identify values' type
// 2.1 | primitives,    -- via -- typeof
const firstValue = 3;
console.log(`ways to identify values' type - typeof firstValue - ${typeof firstValue}`);

// 2.2 | functions,     -- via -- typeof
const secondValue = function fn(x) {
  return x.flip();
};

console.log(`ways to identify values' type - typeof secondValue - ${typeof secondValue}`);
