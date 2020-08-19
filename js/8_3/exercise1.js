    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
   return arrays.reduce((acc, atl) => acc.concat(atl))
}
// console.log(flatten())
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);