let custoProduto = 100
let valorVenda = 250
let lucro
let produtoImposto = custoProduto *1.2

if(custoProduto > 0 && valorVenda > 0){
    lucro = valorVenda - produtoImposto
    return console.log(`O lucro foi de: ${lucro}`)
} else {
    return console.log('erro')
}

