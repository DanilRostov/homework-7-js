import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Pokemon from '../Pokemon';

import './style.css';

export default class PokemonsCatched extends Component {
	render() {
		const { imgSrc } = this.props;
		const pokemonsList = this.props.catchedPokemons ? this.props.catchedPokemons.map((pokemon) => <Pokemon
																																																					key={pokemon.id}
																																																					id={pokemon.id}
																																																					name={pokemon.name}
																																																					imgSrc={imgSrc}
																																																				/> ) : null;
		const btn = this.props.catchedPokemons.length === 0 ? <div className="text">
																																	<div>Nobody was catched :(</div>
																																	<Link to="/">
																																		<button className="btn btn-primary">Back</button>
																																	</Link>
																																</div> : null;
		return(
			<div className="list">
				{pokemonsList}
				{btn}
			</div>
		);
	}
}
