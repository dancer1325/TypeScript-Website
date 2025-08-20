import { exportDeclaration } from "./exportAllAs";

console.log(`export all as - use ${exportDeclaration}`);
const nameToExport = exportDeclaration.nameToExport;        // TODO: why do NOT they access to it?
console.log(`export all as - exportDeclaration.nameToExport + ${nameToExport}`);
