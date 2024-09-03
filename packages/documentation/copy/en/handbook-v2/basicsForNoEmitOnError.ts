// Example to compile with `tsc --noEmitOnError ..`
function greet(name: string) {
  console.log("Hello, " + name);
}

greet("Alice");

// Intentional error: `age` is not declared
greet(age);
