import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './components/layouts/Nav'						/* Layouts */
import Dashboard from './components/dashboard/Dashboard'		/* Dashboard */

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />

					<Switch>
						<Route to='/' component={ Dashboard } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
