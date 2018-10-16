/* Componenst that includes links at the navbar when a User is signed in */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// Actions 
import { signout } from '../../store/actions/auth_actions'

const SignedInLinks = ({ signout, profile }) => {
    return (
        <ul className="menu">
            <li><span className="user">Welcome { profile.name }</span></li>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={ signout }>Log Out</a></li>
        </ul>
    )
}

export default connect(null, { signout })(SignedInLinks)