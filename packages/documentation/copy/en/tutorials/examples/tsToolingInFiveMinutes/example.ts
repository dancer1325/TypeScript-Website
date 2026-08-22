// 1. type annotations
function typeAnnotations(firstNumber: number) {
  console.log(firstNumber);
};

// uncomment to check compile-time error
// typeAnnotations("hello");



// 3.         Interfaces
// 3.1 describe the Person object
interface Person {
  firstName: string;  // type annotation
  lastName: string;
}
// 3.2 type compatibility
// Check '../reference/Type Compatibility'
// 3.3 implement an interface by shape without using `implements`
function greeter(person: Person) {    // function which requires Person as argument
  console.log("Implement interface check " + person.firstName + " " + person.lastName);
}
let user = {
  firstName: "Jane",
  lastName: "User"
};
greeter(user);    // Confirming that you can pass user whose shapes == Person



