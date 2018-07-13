import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './style.css';

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catched: false,
      dataOfCatching: null,
    }
  }

  onCatch = () => {
    const { pokemon } = this.props;
    const dateString = moment().format( "Do MMM YYYY HH:mm" );
    this.setState({
      catched: true,
      dataOfCatching: dateString,
    });
    this.props.onCatched(pokemon, dateString);
  }

  render() {
    const { name, id, imgSrc } = this.props;
    const btnDisabledValue = this.props.catched ? true : false;
    const btnValue = this.props.catched ? 'Catched' : 'Catch';
    const btn = this.props.catchPossible ? <button
                                              disabled={btnDisabledValue}
                                              className="btn btn-success col-sm-4 col-lg-2"
                                              onClick={this.onCatch}>{btnValue}
                                           </button> : null;

    return (
      <div className="list-group">
        <li className="list-item list-group-item">
          <Link to={`/pokemon/${id}`}>
            <div className="img-box col-sm-4 col-lg-1">
              <img src={`${imgSrc}/${id}.png`} />
            </div>
            <h3 className="title col-sm-4 col-lg-9">{name}</h3>
          </Link>
          {btn}
        </li>
      </div>
    );
  }
}
