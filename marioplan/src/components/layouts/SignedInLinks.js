/* Componenst that includes links at the navbar when a User is signed in */

import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="menu">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks