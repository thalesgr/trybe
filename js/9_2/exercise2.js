const func = () => {
    const promise = new Promise ((resolve, reject) => {
        let array = []
        for (let i = 0; i < 10; i++) {
            array[i] = Math.floor(Math.random() * 50) + 1;
        }
        let quads = array.map(n => n * n);
        let sum = quads.reduce((ac, at) => ac + at);
        sum < 8000 ? resolve() : reject()
    })
    promise
        .then(sum => [2, 3, 5, 10].map(n => sum / n))
          .then(array => array.reduce((ac, at) => ac + at))
        .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}






func()