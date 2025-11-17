function printToConsole(s: string) {
  console.log(s);
}

// 1. ways to define
// 1.1 type alias
type GreetFunction = (a: string) => void;         // ⚠️IMPOSSIBLE to define properties⚠️
function greetViaTypeAlias(fn: GreetFunction) {
  fn("Hello, World");
}
greetViaTypeAlias(printToConsole);

// 2. used DIRECTLY
function greeterUsedDirectly(fn: (a: string) => void) {
  fn("Hello, World");
}

greeterUsedDirectly(printToConsole);
