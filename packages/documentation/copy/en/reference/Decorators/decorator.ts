function hello() {
  console.log('Decorator - hello');
}

// 1. can be attached to
// 1.1 class declaration
// TODO: How to fix 'TS1238', without using `ts-ignore`?
// @ts-ignore
@hello
class Person {
  private _name: string;
  private readonly _age: number;

  // 1.2 class' parameter
  // @ts-ignore
  constructor(@hello name: string, age: number) { // Specified just for 1 -> invoked the decorator 1!
    this._name = name;
    this._age = age;
  }
  // 1.3 class' method
  // @ts-ignore
  @hello
  myMethod(a: number, b: number) {
    return a + b;
  }

  // 1.4 class' accessor
  // @ts-ignore
  @hello
  get age(): number {
    return this._age;
  }
}

// Decorators are invoked just once you execute the file. Independently if you call some decorated ones
// Comment next lines to check
const myObject = new Person('Alfred', 32);
const result = myObject.myMethod(10, 20);
