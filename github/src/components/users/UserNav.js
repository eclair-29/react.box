import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNav = () => {
    return (
        <nav className="user-nav">
            <ul className="menu">
                <li><NavLink to='/'>Overview</NavLink></li>
                <li><NavLink to='/'>Repos</NavLink></li>
                <li><NavLink to='/'>Issues</NavLink></li>
                <li><NavLink to='/'>Info</NavLink></li>
            </ul>
        </nav>
    )
}

export default UserNav