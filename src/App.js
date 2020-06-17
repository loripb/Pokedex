import React, { Component } from 'react';
import './App.css';
import PokemonContainer from './components/PokemonContainer'
import PokemonComponent from './components/PokemonComponent'
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class App extends Component {

  state = {
    pokemonArray: [],
    currentPokemon: undefined,
    pokemon: undefined
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(r => r.json())
    .then(data => this.setState({ pokemonArray: data.results }))
  }

  currentPokemon = (pokemonName, url) => {
    this.setState({ currentPokemon: {name: pokemonName, url: url} })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <PokemonContainer pokemonArray={ this.state.pokemonArray } currentPokemon={this.currentPokemon}/> } />
          <Route exact path="/:pokemon">
            <PokemonComponent pokemon={ this.state.currentPokemon }/>
          </Route>
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

export default App;
