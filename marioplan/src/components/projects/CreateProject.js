import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions 
import { create_project } from '../../store/actions/project_actions'

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
        this.props.create_project(this.state)
    }

    render() {
        return (
            <div className="create-project wrapper">
                <form 
                    onSubmit={ this.handle_submit } 
                    className="ui tiny form">

                    <h4>Create a new Projecty</h4>

                    <div className="field">
                        <input 
                            onChange={ this.heandle_change } 
                            id="title" 
                            type="text" 
                            placeholder="Title"
                        />
                    </div>
                    <div className="field">
                        <textarea 
                            rows="8" 
                            onChange={ this.heandle_change } 
                            id="content" 
                            placeholder="Content">
                        </textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="ui basic teal fluid small button">
                            Submit Project
                    </button>
                </form>
            </div>
        )
    }
}

// Dispatchers
const mapDispatchToProps = dispatch => {
    return {
        create_project: project => dispatch(create_project(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)