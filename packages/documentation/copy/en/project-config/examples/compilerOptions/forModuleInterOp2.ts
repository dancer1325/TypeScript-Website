// TODO: check why `tsc` | this path -> error TS7016:
import module from './forModuleInterOp1.js';

console.log(module.add(2, 3)); // Outputs: 5
console.log(module.subtract(5, 1)); // Outputs: 4
