import React, { Component } from 'react';
import { Table, Header, Segment, Image } from 'semantic-ui-react'

class PokemonContainer extends Component {

  state = {
    pokemon: undefined
  }

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.name}`)
    .then(r => r.json())
    .then(data => this.setState({pokemon: data}))
  }

  renderAbilities = () => {
    return this.state.pokemon.abilities.map(ability => {
      return <p>{ability}</p>
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Segment color='red' inverted>
          <Header>{this.props.pokemon.name.toUpperCase()}</Header>
        </Segment>
        {
          this.state.pokemon
          ?
          <>
          <Segment>
            <Image src={this.state.pokemon.sprites.front_default}/>
          </Segment>

          <Table color='red'>
          <Table.Body>
          <Table.Row>
            <Table.Cell>ID:</Table.Cell>
            <Table.Cell>{ this.state.pokemon.id }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Height:</Table.Cell>
            <Table.Cell>{ this.state.pokemon.height }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Weight:</Table.Cell>
            <Table.Cell>{ this.state.pokemon.weight }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Exp:</Table.Cell>
            <Table.Cell>{ this.state.pokemon.base_experience }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Order:</Table.Cell>
            <Table.Cell>{ this.state.pokemon.order }</Table.Cell>
          </Table.Row>
          </Table.Body>
          </Table>
          </>
          :
          null
        }
      </div>
    );
  }

}

export default PokemonContainer;
