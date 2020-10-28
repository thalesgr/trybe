import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data'
import Button from './ButtonNext'

class Pokedex extends React.Component {
  constructor() {
    super()
    this.changePokemon = this.changePokemon.bind(this)
    this.state = {
      index: 0,
      type: 'All'
    }
  }

  changePokemon() {
    if(this.state.index === (pokemons.length - 1)) {
      this.setState({index: -1})
    }
    this.setState((state, _props) => ({
      index: state.index + 1
    }))
  }

  changeType(type) {
    this.setState({
      type
    })
  }
	
  render() {
    let pokemon = pokemons[this.state.index]
    return (
      <div>
        <Pokemon 
        id={pokemon.id}
        name={pokemon.name} 
        type={pokemon.type} 
        averageWeight={pokemon.averageWeight}
        image={pokemon.image}
        moreInfo={pokemon.moreInfo}/>
      <Button onClick={this.changePokemon}>Next</Button>
      <Button onClick={this.changeType('Fire')}>Next</Button>
      </div>
    )
  };
  }

export default Pokedex;


/*
(
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



    let pokemon = pokemons[this.state.index]
    return (
      <div>
        <Pokemon 
        id={pokemon.id}
        name={pokemon.name} 
        type={pokemon.type} 
        averageWeight={pokemon.averageWeight}
        image={pokemon.image}
        moreInfo={pokemon.moreInfo}/>
      <NextBtn onClick={this.changePokemon}>Next</NextBtn>
      </div>
    )
  };
*/ 