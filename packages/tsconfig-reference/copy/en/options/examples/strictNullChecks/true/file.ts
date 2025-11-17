declare const loggedInUsername: string;

const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);    // loggedInUser: undefined
console.log(loggedInUser.age);  // undefined used DIRECTLY, WITHOUT checking BEFORE
