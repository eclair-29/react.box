import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/layouts/Nav'												
import Dashboard from './components/dashboard/Dashboard'				 
import ProjectDetails from './components/projects/ProjectDetails'			 
import CreateProject from './components/projects/CreateProject'				
import SignIn from './components/auth/SignIn'											
import SignUp from './components/auth/SignUp'										

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
