export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}

// Export original validator but rename it
export { ExportDeclaration2 as RegExpBasedZipCodeValidator } from "./exportDeclaration2";
