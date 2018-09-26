/* Componenst that includes links at the navbar when a User is signed out */

import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="menu">
            <li><NavLink to='/'>Log In</NavLink></li>
            <li><NavLink to='/'>Sign Up</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks