const estados =  ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const select = document.getElementById('uf');
const button = document.getElementById('enviar');
const resultado = document.getElementById('resultado');


window.onload = function () {
    for(let i = 0; i < estados.length; i++) {
        let elemento = document.createElement('option')
        elemento.innerHTML = estados[i]
        elemento.value = estados[i]
        select.appendChild(elemento)
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let adress = document.getElementById('adress').value;
    let city = document.getElementById('city').value;
    let uf = document.getElementById('uf').value;
    let resumo = document.getElementById('cv').value;
    let cargo = document.getElementById('cargo').value;
    let descricao = document.getElementById('descricao').value;
    let data = document.getElementById('data-inicio').value;
    let array = [nome, email, cpf, adress, city, uf, resumo, cargo, descricao, data]

    for(let i = 0; i < array.length; i++) {
        let elemento = document.createElement('p');
        elemento.innerHTML = array[i]
        resultado.appendChild(elemento)
    }
})