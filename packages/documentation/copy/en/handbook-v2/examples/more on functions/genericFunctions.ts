// function / output's type NOT specified
function firstElementWithoutSpecifyingOutputType(arr: any[]) {
  return arr[0];
}

// 1. input's types == output's type
function firstElementInputTypeRelatedToOutputType<Type>(arr: Type[]): Type | undefined {
  // generic creates a link BETWEEN input's type == output's type
  return arr[0];
}
// 1.1 string
const s = firstElementInputTypeRelatedToOutputType(["a", "b", "c"]);
// 1.2 number
const n = firstElementInputTypeRelatedToOutputType([1, 2, 3]);
// 1.3 undefined
const u = firstElementInputTypeRelatedToOutputType([]);

// 2. MULTIPLE types
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// 3. constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// 3.1  there can EXIST >= 1 type / match the constraint
// number[]
const longerArray = longest([1, 2], [1, 2, 3]);
// string
const longerString = longest("alice", "bob");
// Error! -- Numbers do NOT have a 'length' property
const notOK = longest(10, 100);

// 4. infer type
// 4.1 ❌NOT ALWAYS possible❌
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
// ONLY ALLOWED 1! type -> it breaks
//const arr = combine([1, 2, 3], ["hello"]);      // uncomment
// specify CONCRETELY the typeS
const arr = combine<string | number>([1, 2, 3], ["hello"]);

// 5. recommendations
// 5.1 ❌NO overuse restriction❌
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// | invoke it, resolve the element
const a = firstElement1([1, 2, 3]);

const b = firstElement2([1, 2, 3]);

// 5.2 use Fewer Type Parameters
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

// FUNC does NOT make sense as type parameter
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  // func   NOT related -- to -- any input's type nor output's type
  return arr.filter(func);
}

// NO sense, because it's NOT relating ANYTHING -- input's type WITHOUT relation WITH ANOTHER ONE
function greetGenericFunctionWithoutSense<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
greetGenericFunctionWithoutSense("world");

function greetNoGenericFunction(s: string) {
  console.log("Hello, " + s);
}
greetNoGenericFunction("Alfred");
