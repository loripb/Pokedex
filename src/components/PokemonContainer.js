import React from 'react';
import PokemonCard from './PokemonCard'
import { List, Container, Header, Segment } from 'semantic-ui-react'

const PokemonContainer = ({pokemonArray, currentPokemon}) => {

  const renderPokemon = () => {
    return pokemonArray.map(pokemon => {
      return <PokemonCard
        pokemonName={ pokemon.name }
        url={ pokemon.url }
        currentPokemon={ currentPokemon }
      />
    })
  }

  return(
    <div className="pokemon-container">
      <Segment color='red' inverted>
        <Header>POKEDEX</Header>
      </Segment>

      <Container fluid>
        <Segment color='red'>
          <List celled>
          { renderPokemon() }
          </List>
        </Segment>
      </Container>
    </div>
  )
}

export default PokemonContainer;
