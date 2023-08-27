//                            --    numeric enums   --
// If you don't specify anything -> they are the default ones, starting from 0
enum Direction {
  Up ,
  Down,
  Left,
  Right,
}
console.log("Direction[2] " + Direction[2]);


// First item can be initialized with a number, and rest increased automatically
enum DirectionInitialized {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log("DirectionInitialized[2] " + DirectionInitialized[2]);

// Initializing another non-first element
enum DirectionInitializedNonFirst {
  Up ,
  Down,
  Left=5,
  Right,    // Value comes from the previous initialized one
}
console.log("DirectionInitializedNonFirst[2] " + DirectionInitializedNonFirst[2]);
console.log("DirectionInitializedNonFirst[0] " + DirectionInitializedNonFirst[0]);
console.log("DirectionInitializedNonFirst[6] " + DirectionInitializedNonFirst[6]);

// Initializing several elements
enum DirectionInitializedSeveral {
  Up ,
  Down=4,
  Left,
  Right=8,
  Other,
}
console.log("DirectionInitializedSeveral[2] " + DirectionInitializedSeveral[2]);
console.log("DirectionInitializedSeveral[0] " + DirectionInitializedSeveral[0]);
console.log("DirectionInitializedSeveral[6] " + DirectionInitializedSeveral[6]);

// Initializing several elements
enum DirectionInitializedSeveralMixingOrder {
  Up ,
  Down=4,
  Left,
  Right=3,
  Other,
}
// If number is repeated -> last one will be taken
console.log("DirectionInitializedSeveralMixingOrder[4] " + DirectionInitializedSeveralMixingOrder[4]);

// Compute initialize === based on a function
enum E {
  A = getSomeValue(),
  B=2,
  C,
  D = getSomeValue(),
  // Not valid, because non initialized members need to be first or have some precedent numeric constant
  //E
}
function getSomeValue() {return 2}


// Get access to enum's item. Real value that you get is the number
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(recipient + message);
}

respond("Princess Caroline", UserResponse.Yes);


//                            --    string enums   --

enum StringDirection {
  Up = "UP",
  // Must be initialized
  //Down,
  Down = "DOWN",
  // Can not be computed initialized
  //Left = getLeftDirection(),
  Left = "LEFT",
  Right = "RIGHT",
}
function getLeftDirection() {return "LEFT"};

// Initializing with another string enum member   --> string type (string or number) is inherited
enum Action {
  Move = StringDirection.Up,
  Stop = StringDirection.Down
}
console.log("StringDirection.Up " + StringDirection.Up);
console.log("Action.Move " + Action.Move);
