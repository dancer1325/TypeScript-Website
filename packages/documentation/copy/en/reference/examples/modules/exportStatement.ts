import { ExportDeclaration1 } from "./exportDeclaration1"
import { numberRegexp } from "./exportDeclaration2"

class ZipCodeValidator implements ExportDeclaration1 {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// export -- as -- statement
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };   // export statement
