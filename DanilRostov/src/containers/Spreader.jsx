import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import PokemonsList from '../components/PokemonsList';
import PokemonsCatched from '../components/PokemonsCatched';
import PokemonPage from '../components/PokemonPage';

export default class Spreader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catchedPokemons: [],
      catchedIds: [],
    }
  }

  handleCatched = (pokemon, date) => {
    const { catchedPokemons, catchedIds } = this.state;
    pokemon.dateOfCatching = date;
    this.setState({
      catchedPokemons: catchedPokemons.concat(pokemon),
      catchedIds: catchedIds.concat(pokemon.id),
    });
  }

  render() {
    const { catchedPokemons, catchedIds } = this.state;
    const host = 'http://localhost:3005';
    const imgSrc = 'https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons';
    return (
      <Switch>
        <Route
          exact path="/"
          render={(props) => <PokemonsList
                                {...props}
                                catchedIds={catchedIds}
                                catchedPokemons={catchedPokemons}
                                onCatched={this.handleCatched}
                                host={host}
                                imgSrc={imgSrc}
                             />
          }
        />
        <Route
           exact path="/catched"
           render={(props) => <PokemonsCatched
                                {...props}
                                catchedPokemons={this.state.catchedPokemons}
                                imgSrc={imgSrc}
                              />
          }
         />
        <Route
          exact path="/pokemon/:id"
          render={(props) => <PokemonPage
                                {...props}
                                catchedIds={catchedIds}
                                catchedPokemons={catchedPokemons}
                                host={host}
                                imgSrc={imgSrc}
                             />
          }
        />
      </Switch>
    );
  }
}
