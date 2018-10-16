import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Actions
import { signup } from '../../store/actions/auth_actions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    heandle_change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handle_submit = e => {
        e.preventDefault()
        e.target.reset()

        this.props.signup(this.state)
    }

    render() {  
        const { auth } = this.props
        /* Checking if the user is signed in or not */
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="signup wrapper">
                <form 
                    onSubmit={ this.handle_submit } 
                    className="ui tiny form">

                    <h4>Sign Up to join the Party</h4>

                    <div className="two fields">
                         <div className="field">
                            <input 
                                onChange={ this.heandle_change } 
                                id="firstName" type="text" 
                                placeholder="First Name"
                            />
                        </div>
                        <div className="field">
                            <input 
                                onChange={ this.heandle_change } 
                                id="lastName" 
                                type="text" 
                                placeholder="Last name"
                            />
                        </div>
                    </div>

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
                            Register
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, { signup })(SignUp)