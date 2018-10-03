import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
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
            <div className="signin wrapper">
                <form 
                    onSubmit={ this.handle_submit } 
                    className="ui tiny form">

                    <h4>Sign In to join the Party</h4>

                    <div className="field">
                        <input 
                            onChange={ this.heandle_change } 
                            id="email" 
                            type="email" 
                            placeholder="Email"
                        />
                    </div>
                    <div className="field">
                        <input 
                            onChange={ this.heandle_change } 
                            id="password" 
                            type="password" 
                            placeholder="Password"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="ui basic teal fluid small button">
                            Continue
                    </button>
                </form>
            </div>
        )
    }
}

export default SignIn