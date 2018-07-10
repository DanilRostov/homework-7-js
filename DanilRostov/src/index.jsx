import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Spreader from './containers/Spreader.jsx';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container" >
					<Navigation />
					<Spreader />
				</div>
			</BrowserRouter>
		);
	}
}

const mountNode = document.getElementById('app');
ReactDom.render(<App />, mountNode);
