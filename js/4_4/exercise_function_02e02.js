const a1 = [2, 3, 6, 7, 10, 1];
const a2 = [2, 4, 6, 7, 10, 0, -3];

function posicaoMaior (array) {
    let maiorPosicao = 0;
    let maiorNumero = array[0];
    for(let i = 1; i < array.length; i++) {   
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
            maiorPosicao = i;
        }
    } console.log(maiorPosicao);
};


posicaoMaior(a1);

function posicaoMenor (array) {
    let menorPosicao = 0;
    let menorNumero = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < menorNumero) {
            menorNumero = array[i]
            menorPosicao = i;
        }
    } console.log(menorPosicao);
};

posicaoMenor(a2);