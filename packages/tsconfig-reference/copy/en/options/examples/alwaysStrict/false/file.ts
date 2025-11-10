// This code works in non-strict mode but would fail with alwaysStrict: true

function createGlobalVar() {
  // Creates global variable without declaration (non-strict behavior)
  globalMessage = "Hello World";
  return globalMessage;
}

function duplicateParams(a, a) {  // Duplicate parameter names allowed in non-strict
  return a;
}

function useArguments() {
  arguments.callee();  // arguments.callee is forbidden in strict mode
}

// Octal literals (deprecated, forbidden in strict mode)
var octalNumber = 077;

// Assignment to non-writable property (fails silently in non-strict)
var obj = {};
Object.defineProperty(obj, "readOnly", { value: 42, writable: false });
obj.readOnly = 100;  // Silently fails in non-strict, throws error in strict

console.log(createGlobalVar());
