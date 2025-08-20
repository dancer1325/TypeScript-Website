// 1. unionMember1 | unionMember2 | …
function printId(id: number | string) {     // number | string
  console.log("Your ID is: " + id);
}

printId(101);
printId("202");
// printId({ myID: 22342 });    // If you try to pass another type, as an object -> Error -- Uncomment this line



// 2. if operation or method is valid for ALL unionMembers → valid for the union type
function printIdOperationCommon(id: number | string) {
  //console.log(id.toUpperCase());    // number.toUpperCase() is NOT valid  -> Invalid operation on the union type
  console.log(id);      // Operation valid for all the union members -> valid on the union type
}
function methodCommon(x: number[] | string) {
  return x.slice(0, 3);     // .slice   is common for all union members
}

// 2.1 Narrowing as solution   -- typeof --
function printIdNarrowingWithTypeOf(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());  // In this block, id is of type 'string'     -> NO error
  } else {
    console.log(id);    // In this block, id is of type 'number'     -> NO error
  }
}

// 2.2 Narrowing as solution   -- unionMember's built-in methods to check them --
function printNarrowingWithBuiltIn(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));     // In this block, x is of type '[string]'     ->   NO error
  } else {
    console.log("Welcome lone traveler " + x);    // In this block, x is of type 'string'     -> NO error
  }
}
