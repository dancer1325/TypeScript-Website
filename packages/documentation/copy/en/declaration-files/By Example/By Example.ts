//                                       -- General --
// If you don't use declare keyword, as next line -> compiler complains, since it's not defined in a .ts file
// function f1(): { a: number; b: string };
// Next line, compiler doesn't complain   -- but it should be declared in some part, not in a .ts file --
// TODO: How to make it work at runtime, implementing the function?
declare function f1(): { a: number; b: string };

const result = f1();
console.log(result.a);
console.log(result.b);