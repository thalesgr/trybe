const maiorNome = (array) => {
    let bigName = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i].length > bigName.length){
            bigName = array[i];
        }
    }
    console.log(bigName);
}

const teste =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

maiorNome(teste);