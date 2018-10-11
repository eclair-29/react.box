import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions 
import { signin } from '../../store/actions/auth_actions'

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

        this.props.signin(this.state)
    } 

    render() {
        const { authError } = this.props

        return (
            <div className="signin wrapper">
                { authError ? (
                    <div className="ui red message">{ authError }</div>
                ) : null }

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

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, { signin })(SignIn)