import React from 'react';
import './App.css';

const task = (value) => {
  return (
    value.flatMap(v => <li>{v}</li>
    )
  );
}

const array = ['js', 'java', 'react']

function App() {
  return (
    task(array)
  );
}

export default App;
