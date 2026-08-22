"use strict";
// 1. type annotations
function typeAnnotations(firstNumber) {
    console.log(firstNumber);
}
;
typeAnnotations("hello");
// 3.2 type compatibility
// Check '../reference/Type Compatibility'
// 3.3 implement an interface by shape without using `implements`
function greeter(person) {
    console.log("Implement interface check " + person.firstName + " " + person.lastName);
}
let user = {
    firstName: "Jane",
    lastName: "User"
};
greeter(user); // Confirming that you can pass user whose shapes == Person
