function contem (word, end) {
    let contido = true;
    let arrayWord = word.split('');
    let arrayEnd = end.split('');
    for(let i = 0; i < end.length; i++){
        if(end[end.length -1 -i] != word[word.length - 1 -i]){
            contido = false;
        }
    }
    return contido;
}

console.log(contem('thales', 'les'));