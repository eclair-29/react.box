import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return (
        <ul className="menu">
            <li><NavLink to='/'>Users</NavLink></li>
            <li><NavLink to='/repos'>Repos</NavLink></li>
            <li><NavLink to='/issues'>Issues</NavLink></li>
        </ul>
    )
}

export default NavLinks