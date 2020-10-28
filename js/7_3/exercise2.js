const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert(myRemove([1, 2, 3, 4], 3) === [1, 2, 4], 'Não são iguais!')
assert(myRemove([1, 2, 3, 4], 3) !== [1, 2, 3, 4], 'Não são iguais!')
assert(myRemove([1, 2, 3, 4], 3) === [1, 2, 3, 4], 'O array sofreu mudanças!')
assert(myRemove([1, 2, 3, 4], 5) === [1, 2, 3, 4], 'Não retorna o array esperado' )
