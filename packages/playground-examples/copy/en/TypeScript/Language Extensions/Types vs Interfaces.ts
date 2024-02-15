//  1. Pretty similar to create objects
type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };



// 2. Possible to intermix their use
const bird3: BirdInterface = bird1;



// 3. Support being extended
// 3.1 type       via     intersection type -- & --
type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;      // second member can be an interface, but the important is the 1@

// if some type’s properties have default values & you want to create an object → REDUNDANT to specify it!!!
let owl: Owl = { wings: 2, nocturnal: true };

// 3.2 interface  via     extends
interface Peacock extends BirdType {      // extends a type
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {   // extends an interface
  colourful: false;
  flies: false;
}

// although some interface’s properties have default values & you want to create an object → NEED to specify it!!!
//let chicken: Chicken = { colourful: false, flies: false }; // uncomment this line to check
let chicken: Chicken = { wings:2, colourful: false, flies: false };

// NOT possible to extend an unionType
type mix = BirdType | Owl;
/*interface another extends mix {       // -- uncomment this line to check
  colourful: true;
  flies: false;
}*/

// 4. Typescript gives better error messages for interface
//    -> recommend it's use
owl = chicken;      // hove over the error message
chicken = owl;      // hove over the error message



// 5. type` are closed and `interface` are open
// 5.1 interface
interface Kitten {
  purrs: boolean;
}
interface Kitten {      // Re-declare the interface
  colour: string;
}

// 5.2 type
type Puppy = {
  color: string;
};
type Puppy = {    // Error Re-declare the type
  toys: number;
};

