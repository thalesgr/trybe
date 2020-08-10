const fatorial = (n) => {
    let produto = n; 
    for(let i = 1; i < n; i++) {
        produto *= i; 
    }
    return produto;
}

console.log(fatorial(5));