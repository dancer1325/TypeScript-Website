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
// Access to enum's value
console.log("UserResponse.No " + UserResponse.No );
console.log("UserResponse[\"No\"] " + UserResponse["No"] );
// Access to enum's key
console.log("UserResponse[0] " + UserResponse[0] );


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


//                            --    heterogeneus enums   --

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
console.log("BooleanLikeHeterogeneousEnum.No " + BooleanLikeHeterogeneousEnum.No);
console.log("BooleanLikeHeterogeneousEnum.Yes " + BooleanLikeHeterogeneousEnum.Yes);


//                            --    enum's members constant or computed   --
// 1. constant member
// 1.1 first member, non-initialized
enum E {
  X,
}
// 1.2 non-first members, non initialized nothing
enum E1 {
  X,
  Y,
  Z,
}
// 1.3 non-first members, non initialized, preceded by a numeric constant
enum E2 {
  A = 1,
  B,
  C,
}
// 1.4 constant enum expression
// 1.4.1 literal enum expression
// 1.4.1.1 literal string
enum literalString {
  First="FIRST",
  Second="SECOND",
}
// 1.4.1.2 literal numeric
enum literalNumber {
  First=0,
  Second=1,
}
// 1.4.2 reference to another enum's constant member
enum referenceToAnotherEnumConstant{
  AnotherFirst= literalString.First,
  AnotherSecond = literalString.Second
}
// 1.4.3 parenthesized constant enum expression
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
console.log("(Colors.Red) " + (Colors.Red));
// 1.4.4 unary operators applied to constant enum expression
enum withUnaryOperators {
  UnaryPlus= +2,
  UnaryMinus= -8,
  BitwiseNotOperator= ~5
}
console.log("withUnaryOperators.UnaryPlus " + withUnaryOperators.UnaryPlus);
console.log("withUnaryOperators.UnaryMinus " + withUnaryOperators.UnaryMinus);
console.log("withUnaryOperators.BitwiseNotOperator " + withUnaryOperators.BitwiseNotOperator);
// 1.4.5 binary operators applied to constant enum expressions
enum withBinaryOperators{
  Add= 2+2,
  Minus= 7-8,
  Multiply = 2*4,
  Divide= 4/2,
  Remainder = 5%2,
  LeftShifting= 5 << 2,
  RightShifting= 5 >> 2,
  UnsignedRightSift= -5 >>>2,
  BitwiseAnd= 5 & 3,
  BitwiseOr= 5 | 3,
  BitwiseXor= 5^3,
}
console.log("withBinaryOperators.Add " + withBinaryOperators.Add);
console.log("withBinaryOperators.Minus " + withBinaryOperators.Minus);
console.log("withBinaryOperators.Divide " + withBinaryOperators.Divide);
console.log("withBinaryOperators.Remainder " + withBinaryOperators.Remainder);
console.log("withBinaryOperators.LeftShifting " + withBinaryOperators.LeftShifting);
console.log("withBinaryOperators.RightShifting " + withBinaryOperators.RightShifting);
console.log("withBinaryOperators.UnsignedRightSift " + withBinaryOperators.UnsignedRightSift);
console.log("withBinaryOperators.BitwiseOr " + withBinaryOperators.BitwiseOr);
console.log("withBinaryOperators.BitwiseXor " + withBinaryOperators.BitwiseXor);



