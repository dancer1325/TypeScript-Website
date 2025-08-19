// 1. import 1! export -- from a -- module
import { ExportDeclaration1 } from './exportDeclaration1';

let exportDeclaration: ExportDeclaration1 = {
  isAcceptable(s: string): boolean {
    return s.includes('something');
  }
}

// 1.1 rename import
import { numberRegexp as renamedNumberRegexp} from './exportDeclaration2';
console.log(`import 1! export - rename ${renamedNumberRegexp}`);

// 2. import the entire module | 1! variable
//import * from "./exportDeclaration2";                   // ❌NOT VALID❌
import * as wholeModule from "./exportDeclaration2";      // | 1! variable == `as`
console.log(`import the entire module - ${wholeModule}`);

// 3. import the ENTIRE module
import "./moduleWithoutExport";

// 4. ways to import a `type`
// 4.1 -- via -- `import`
import {appartment} from './exportDeclaration2';
// 4.1 -- via -- `import type`
import type {appartment} from './exportDeclaration2';

// 4.2 -- via -- `import { ..., type someTypeToImport} from ...`
import {numberRegexp, type appartment} from './exportDeclaration2';
