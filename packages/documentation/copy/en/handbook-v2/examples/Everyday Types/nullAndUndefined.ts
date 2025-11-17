

//                            --    non-null assertion operator (!)   --
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
liveDangerously(2);
// Next line, obviously throws an error, but we have cheated to the compiler, because
// we had specified that it would not be null
// liveDangerously(null);

function liveDangerouslyWithoutNonNullAssertionOperator(x?: number | null) {
  // No error -- TODO: Why don't we get an error by the IDE? --
  console.log(x.toFixed());
}
liveDangerouslyWithoutNonNullAssertionOperator(null);

