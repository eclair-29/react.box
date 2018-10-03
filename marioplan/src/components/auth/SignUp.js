import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        fname: '',
        Lname: ''
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
            <div className="signup wrapper">
                <form onSubmit={ this.handle_submit } className="ui tiny form">
                    <h4>Sign Up to join the Party</h4>

                    <div className="two fields">
                         <div className="field">
                            <input onChange={ this.heandle_change } id="fname" type="text" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <input onChange={ this.heandle_change } id="lname" type="text" placeholder="Last name"/>
                        </div>
                    </div>

                    <div className="field">
                        <input onChange={ this.heandle_change } id="email" type="email" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <input onChange={ this.heandle_change } id="password" type="password" placeholder="Password"/>
                    </div>

                    <button type="submit" className="ui basic teal fluid small button">Register</button>
                </form>
            </div>
        )
    }
}

export default SignUp