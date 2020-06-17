import React from 'react';
import {Link} from 'react-router-dom';
import { List } from 'semantic-ui-react'

const PokemonCard = ({pokemonName, url, currentPokemon}) => {

  const handleClick = () => {
    currentPokemon(pokemonName, url)
  }

  return(
    <div>
      <List.Item>
        <Link to={`/${pokemonName}`} onClick={ handleClick }>{pokemonName.toUpperCase()}</Link>
      </List.Item>
    </div>
  )
}

export default PokemonCard;
