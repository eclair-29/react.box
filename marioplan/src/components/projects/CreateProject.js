import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    heandle_change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handle_submit = e => {
        e.preventDefault()
        e.target.reset()

        console.log(this.state)
    }

    render() {
        return (
            <div className="create-project wrapper">
                <form onSubmit={ this.handle_submit } className="ui tiny form">
                    <h4>Create a new Projecty</h4>

                    <div className="field">
                        <input onChange={ this.heandle_change } id="title" type="text" placeholder="Title"/>
                    </div>
                    <div className="field">
                        <textarea rows="8" onChange={ this.heandle_change } id="content" placeholder="Content"></textarea>
                    </div>

                    <button type="submit" className="ui basic teal fluid small button">Submit Project</button>
                </form>
            </div>
        )
    }
}

export default CreateProject