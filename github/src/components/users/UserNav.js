import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNav = ({ user }) => {
    return (
        <nav className="user-nav">
            <ul className="menu">
                <li><NavLink to={ `/${user.login}/` }>Overview</NavLink></li>
                <li><NavLink to={ `/${user.login}/repos` }>Repos</NavLink></li>
                <li><NavLink to={ `/${user.login}/issues` }>Issues</NavLink></li>
                <li><NavLink to={ `/${user.login}/info` }>Info</NavLink></li>
            </ul>
        </nav>
    )
}

export default UserNav