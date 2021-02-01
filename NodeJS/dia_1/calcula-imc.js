const readlineSync = require('readline-sync');

function calculaImg() {
  let altura = readlineSync.questionFloat('Qual a sua altura? ').toFixed(2);
  let peso = readlineSync.questionFloat('Qual seu peso? ').toFixed(2);
  const imc = (peso / (altura ** 2)).toFixed(2);

  if(imc < 18.5) {
    console.log(`O seu IMC é: ${imc} e você está abaixo do peso!`);
  }
  if(imc >= 18.5 && imc <= 24.9) {
    console.log(`O seu IMC é: ${imc} e você está no peso ideal!`);
  }
  if(imc >= 25 && imc <= 29.9) {
    console.log(`O seu IMC é: ${imc} e você está acima do peso!`);
  }
  if(imc >= 30 && imc <= 34.9) {
    console.log(`O seu IMC é: ${imc} e você está em obesidade grau I!`);
  }
  if(imc >= 35 && imc <= 39.9) {
    console.log(`O seu IMC é: ${imc} e você está em obesidade grau II!`);
  }
  if(imc >= 40) {
    console.log(`O seu IMC é: ${imc} e você está em obesidade grau III!`);
  }
}

calculaImg()


