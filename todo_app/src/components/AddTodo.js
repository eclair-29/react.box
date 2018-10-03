import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }

    handle_change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handle_submit = e => {
        e.preventDefault()
        this.props.add_todo(this.state)
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className="add-todo wrapper">
                <form 
                    onSubmit={ this.handle_submit }
                    className="ui form"
                >
                    <div className="ui action fluid input">
                        <input 
                            onChange={ this.handle_change }
                            id="content"
                            type="text"
                            placeholder="Write an activity"
                            value={ this.state.content }
                        />
                        <button
                            type="submit"
                            className="ui basic button"
                        >
                            Add Todo
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo