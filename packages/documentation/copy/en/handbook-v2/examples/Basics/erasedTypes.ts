// run `tsc` & check compiled "*.js", checking that there is NO type specified
function greetFromErased(person: string, date: Date): string {
  return `Hello ${person}, today is ${date.toDateString()}!`;
}

const personName: string = "Alice";
const today: Date = new Date();
const greetMessage: string = greetFromErased(personName, today);
