let person: string = "Alfred";
let date: Date = new Date();

// template string
// 1. | ES6+, exist
// 2. | ES6-, `concat`
`Hello ${person}, today is ${date.toDateString()}!`;
