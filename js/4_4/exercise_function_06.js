function somatorio (numero) {
    let soma = 0;
    for(let i = numero; i >= 1; i--){
        soma += i
    }
    return soma
}

console.log(somatorio(5))