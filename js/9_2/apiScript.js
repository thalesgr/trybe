const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
};

// const container = document.getElementById('jokeContainer')

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  .then(res => res.json())
      .then(data => document.getElementById('jokeContainer').innerHTML = data.joke) 
};


window.onload = () => fetchJoke();