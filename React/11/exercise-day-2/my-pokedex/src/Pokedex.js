import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data'

class Pokedex extends React.Component {
  render() {
    return (
        pokemons.map(pokemon => (
        <Pokemon 
        key={pokemon.id} 
        id={pokemon.id}
        name={pokemon.name} 
        type={pokemon.type} 
        averageWeight={pokemon.averageWeight}
        image={pokemon.image}
        moreInfo={pokemon.moreInfo}/>))
    )
  };
};

export default Pokedex;