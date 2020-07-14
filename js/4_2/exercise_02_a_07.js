let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//2
const soma = (ant, at) => ant + at

let sum = numbers.reduce(soma)

console.log(sum)
//3 e 4
if(sum/numbers.length >= 20){
    console.log('Número maior do que 20')
} else {
    console.log('Número menos do que 20')
}
//5
let maiorNumero = numbers[0]
for(let i = 1; i < numbers.length; i++) {   
    if(numbers[i] > maiorNumero){
        maiorNumero = numbers[i]
    }
}
console.log(maiorNumero)
//6
let impares = []
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
        impares.push(numbers[i])
    }       
}
console.log(impares)
//7
let menorNumero = numbers[0]
for(let i = 1; i < numbers.length; i++) {   
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i]
    }
}
console.log(menorNumero)