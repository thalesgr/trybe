const sumRandom = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 50) + 1;
    }
    let quads = array.map(n => n * n);
    let sum = quads.reduce((ac, at) => ac + at);
    if(sum > 8000) throw new Error();

    return sum;
}

const arraySum = sum => [2, 3, 5, 10].map(n => n / sum);
const newarraySum = array => array.reduce((ac, at) => ac + at);

const func = async () => {
   try {
       const sum = await sumRandom();
       const arr = await arraySum(sum);
       const finalSum = await newarraySum(arr);

       console.log(arr, finalSum);
   } catch(e) {
       console.log('É mais de oito mil! Essa promise deve estar quebrada!');
   }
}

func()