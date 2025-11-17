type SomeObject = any;

// 1. construct signature      ==  call signature / add `new` & create NEW object
type SomeConstructor = {
  new (s: string): SomeObject;
};

// 2. use constructor signature
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

// 3. | 1 type, construct signature + call signature
interface CallOrConstruct {
  new (s: string): Date;    // construct signature
  (n?: number): string;     // call signature
}
