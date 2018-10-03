import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/layouts/Nav'								// Layouts
import Dashboard from './components/dashboard/Dashboard'				// Dashboard
import ProjectDetails from './components/projects/ProjectDetails'		// Proj. Details
import CreateProject from './components/projects/CreateProject'			// Create Proj.
import SignIn from './components/auth/SignIn'							// Sign In
import SignUp from './components/auth/SignUp'							// Sign Up

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />

					<Switch>
						<Route exact path='/' component={ Dashboard } />
						<Route path='/projects/:id' component={ ProjectDetails } />
						<Route path='/create' component={ CreateProject } />
						<Route path='/signin' component={ SignIn } />
						<Route path='/signup' component={ SignUp } />
					</Switch>
				</div>
			</BrowserRouter>	
		);
	}
}

export default App;
