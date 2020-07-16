function repetition (array) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let i in array) {
      let verificaNumero = array[i];
      for (let j in array) {
        if (verificaNumero === array[j]) {
          contNumero++;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = i;
      }
      contNumero = 0;
    }
    return array[indexNumeroRepetido];
}


console.log(repetition([2, 3, 2, 5, 8, 2, 3]));