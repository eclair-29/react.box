import React, { Component } from 'react';
import uuid from 'uuid'

import Todos from './components/Todos'
import Recents from './components/Recents'
import AddTodo from './components/AddTodo'

class App extends Component {
	state = {
		todos: [
			{ id: 'x402sD28xD', content: 'make a todo app using react.js' },
			{ id: '9oaGhi24c8', content: 'make a user management app using react.js' }
		],
		recents: []
	}

	add_todo = todo => {
		todo.id = uuid()
		let todos = [ ...this.state.todos, todo ]

		this.setState({ todos })
	}

	remove_todo = id => {
		let todos = this.state.todos.filter(todo => {
			return todo.id !== id
		})

		this.setState({ todos })
	}

	add_recent = todo => {
		let recents = [ ...this.state.recents, todo ]

		this.setState({ recents })
	}

	render() {
		return (
			<div className="App">
				<AddTodo add_todo={ this.add_todo } />
				<Todos 
					todos={ this.state.todos }
					remove_todo={ this.remove_todo } 
					add_recent={ this.add_recent }
				/>
				<Recents recents={ this.state.recents } />
			</div>
		);
	}
}

export default App;
