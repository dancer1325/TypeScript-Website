// 1. error -- due to -- `noImplicitAny`
function greet(name) {  // Error: Parameter 'name' implicitly has an 'any' type
  return "Hello " + name;
}

// 2. error -- due to -- `strictNullChecks`
let user: { name: string } | null = null;
console.log(user.name);  // Error: Object is possibly 'null'

// 3. error -- due to -- `strictPropertyInitialization`
class Person {
  name: string;  // Error: Property 'name' has no initializer
  age: number;   // Error: Property 'age' has no initializer
}

// 4. error -- due to -- `noImplicitReturns`
function getValue(x: number) {  // Error: Not all code paths return a value
  if (x > 0) {
    return x;
  }
  // Missing return statement
}
