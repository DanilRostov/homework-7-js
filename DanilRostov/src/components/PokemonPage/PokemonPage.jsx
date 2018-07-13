import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class PokemonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const { host } = this.props;
    fetch(`${host}/pokemons/${id}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        pokemon: data,
      })
    })
  }

  render() {
    const { catchedIds, catchedPokemons, imgSrc } = this.props;
    const id = Number(this.props.match.params.id);
    const catched = catchedIds.indexOf(id) != -1 ? 'is catched' : 'not catched';
    const catchedClass = catchedIds.indexOf(Number(id)) != -1 ? 'catched' : 'notcatched';
    const date = catchedPokemons.map((pokemon) => {
      if(pokemon.id === id) {
        return pokemon.dateOfCatching;
      }
      return null;
    });
    const dateTag = catchedIds.indexOf(id) != -1 ? <li className="list-group-item">Date of catching: {date}</li> : null;


    return (
      <div className="card offset-sm-1 col-sm-10 col-lg-4 offset-lg-4">
        <h2 className="card-header">{this.state.pokemon.name}</h2>
        <img className="card-img" src={`${imgSrc}/${id}.png`} />
        <ul className="list-group list-group-flush">
          <li className={`list-group-item ${catchedClass}`}>Pokemon {catched}</li>
          {dateTag}
          <li className="list-group-item">ID: {id}</li>
          <Link to="/"><button className="btn btn-back btn-primary">Back</button></Link>
        </ul>
      </div>
    );
  }
}
