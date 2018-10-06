import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Layouts 
import Nav from './components/layouts/Nav'

// Routes
import Users from './components/users/Users'
import Repos from './components/repositories/Repos'
import Issues from './components/issues/Issues'
import UserDetails from './components/users/UserDetails'
import RepoDetails from './components/repositories/RepoDetails'
import IssueDetails from './components/issues/IssueDetails'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{/* Navbar */}
					<Nav />

					{/* Routes */}
					<Switch>
						<Route exact path='/' component={ Users } />
						<Route path='/repos/:repo' component={ RepoDetails } />
						<Route path='/repos' component={ Repos } />
						<Route path='/issues/:issue' component={ IssueDetails } />
						<Route path='/issues' component={ Issues } />
						<Route path='/:user' component={ UserDetails } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
