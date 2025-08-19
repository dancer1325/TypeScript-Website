// 1. Unknown
// 1.1 any
const jsonParser = (jsonString: string) => JSON.parse(jsonString);    // if you do NOT specify -> any

const myAccount = jsonParser(`{ "name": "Dorothea" }`);

myAccount.name;
myAccount.email;

// 1.2 unknown
const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);

const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);

// 1.2.1 ❌WITHOUT checking the type -> you can NOT use it❌
myOtherAccount.name;

// 1.2.2 type assertion BEFORE using it
type User = { name: string };
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
myUserAccount.name;




// 2. Never

// 2.1 code / logically can NOT happen

const neverReturns = () => {
  // Reason:🧠| FIRST line, throws an error🧠
  throw new Error("Always throws, never returns");
};

// hover | type, `:never`
//    == should NEVER happen

const myValue = neverReturns();

// 2.2 uses
// 2.2.1 function / returns `never`, to handle
//   JS runtime
//   API consumers / NOT use types

const validateUser = (user: User) => {
  if (user) {
    return user.name !== "NaN";
  }

  // code path / can NEVER happen
  return neverReturns();
};

// 2.2.2 exhaustive switch

enum Flower {
  Rose,
  Rhododendron,
  Violet,
  Daisy,
}

const flowerLatinName = (flower: Flower) => {
  switch (flower) {
    case Flower.Rose:
      return "Rosa rubiginosa";
    case Flower.Rhododendron:
      return "Rhododendron ferrugineum";
    case Flower.Violet:
      return "Viola reichenbachiana";
    case Flower.Daisy:
      return "Bellis perennis";

    default:
      const _exhaustiveCheck: never = flower;
      return _exhaustiveCheck;
  }
};

// 2.2.3 | Unions
// never is AUTOMATICALLY removed

type NeverIsRemoved = string | never | number;
