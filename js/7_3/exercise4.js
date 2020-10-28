const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert(myFizzBuzz(15) === 'fizzbuzz', 'Erro!')
assert(myFizzBuzz(6) === 'fizz', 'Erro!')
assert(myFizzBuzz(10) === 'buzz','Erro!')
assert(myFizzBuzz(7) === 7, 'Erro!')
assert(myFizzBuzz('l'), 'Parametro nao é um numero')
