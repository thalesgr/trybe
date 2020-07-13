let peça = 'rei'
let p = peça.toLowerCase()

if(p === 'peao'){
    return console.log('peao -> frente')
} else if(p === 'torre'){
    return console.log('torre -> vertical ou horizontal')
} else if(p === 'cavalo'){
    return console.log('cavalo -> Movimentação em L')
} else if(p === 'bispo'){
    return console.log('bispo -> diagonais')
} else if(p === 'rainha'){
    return console.log('rainda -> qualquer direção')
} else if(p === 'rei'){
    return console.log('rei -> qualquer direção')
} else {
    return console.log('Peça não existente')
}