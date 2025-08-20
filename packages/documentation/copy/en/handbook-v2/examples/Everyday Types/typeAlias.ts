declare function getInput(): string;
declare function sanitize(str: string): string;

// type alias for string
type UserInputSanitizedString = string;

// string -- can be replaced by the -- alias
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";