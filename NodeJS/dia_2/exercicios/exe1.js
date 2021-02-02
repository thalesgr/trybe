function primeiro(a, b, c) {
    return new Promise((resolve, reject) => {
        if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
            return reject(new Error('Digite apenas numeros.'))
        }
        resolve(a + b)
    })
    .then((r) => {
        result = r * c
        if(result < 50) {
            return Promise.reject(new Error('Valor muito baixo'))
        }
        return result;
    })
};

primeiro(2, 5, 5)
