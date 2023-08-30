


//                            --    Partial<Type>    --

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

// fieldsToUpdate     is Partial<>  -> You can pass just any property that you want
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});


//                            --    Record<Type>    --

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

const boris = cats.boris;

// Get access to the values
console.log('boris.age ' + boris.age + ' boris.breed ' + boris.breed);


//                            --    ReturnType<Type>    --

// 1. () => string
type T0 = ReturnType<() => string>;   // initial type is string
let toType: T0 = "toInitialized";   // create a variable with the only possible initial type
console.log("[ReturnType] typeof toType " + typeof toType);


// 2. (s: string) => void
type T1 = ReturnType<(s: string) => void>;  // initial type is void
let t1Type: T1 = null;        // you can associate null or undefined as type void
let t12Type: T1 = undefined;   // you can associate null or undefined as type void
console.log("[ReturnType] typeof t1Type " + typeof t1Type);   // but object is the type
console.log("[ReturnType] typeof t12Type " + typeof t12Type); // but undefined is the type


// 3. function<T> = () => T
type functionType<T> = () => T;
function getString(): string {
  return "Hello, TypeScript!";
}
const sampleOfFunctionType: functionType<string> = getString;
// Here you can see also the useful of typeOF
type T2 = ReturnType<typeof sampleOfFunctionType>; // any is indicated by my IDE TODO: Why in the documentation is unknown?
const sampleOfT2: T2 = "example";         // Show that it's of type string
console.log("[ReturnType] typeof t2 " + typeof sampleOfT2);


// 4. function<T extends U, U extends number[]> = () => T
type functionTypeTwo<T extends U, U extends number[]> = () => T;
const functionThree: functionTypeTwo<[1, 2, 3], number[]> = () => [1, 2, 3];
type T3 = ReturnType<typeof functionThree>;
const sampleOfT3: T3 = [1, 2, 3];         // Show that its type is this array
console.log("[ReturnType] typeof t2 " + typeof sampleOfT3);


// 5. f1(): { a: number; b: string }
declare function f1(): { a: number; b: string };
type T4 = ReturnType<typeof f1>;        // Necessary to use typeOf
const sampleOfT4: T4 ={a:2, b:"Alfredo"};  // Show that its type is this object
console.log("[ReturnType] typeof T4 " + typeof sampleOfT4);


// 6. any
type T5 = ReturnType<any>;    // It's also any
const stringOfT5: T5 ="stringOfT5";
const numberOfT5: T5 = 3;
console.log("[ReturnType] typeof T5 - stringOfT5: " + typeof stringOfT5 + " - numberOfT5:  " + numberOfT5);


// 7. never
type T6 = ReturnType<never>;    // It's also never
const sampleT6 = function throwError(message: string): T6 {
  throw new Error(message);
}
console.log("[ReturnType] typeof T6 - sampleT6: " + typeof sampleT6);


// 8. Invalid for non-functions or special types
// type T7 = ReturnType<string>;
// type T8 = ReturnType<Function>;