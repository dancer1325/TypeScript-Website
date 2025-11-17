// 1. import
import { ExportDeclaration1 } from "./exportDeclaration1";

// 2. export variable
export const numberRegexp = /^[0-9]+$/;

// 3. export class
export class ExportDeclaration2 implements ExportDeclaration1 {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

export type appartment = {
  numberOfRooms: number;
  numberOfToilettes: number;
  hasTerrace: boolean;
  hasParking: boolean;
  isAttic: boolean;
}
