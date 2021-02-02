 async function segundo(a, b, c) {
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
    return Promise.reject(new Error('Digite apenas números'));
  }
  const sum = a + b;
  const mul = sum * c;
  return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
};