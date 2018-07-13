import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class Navigation extends Component {
  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catched">Catched pokemons</Link>
        </li>
      </ul>
    );
  }
}
