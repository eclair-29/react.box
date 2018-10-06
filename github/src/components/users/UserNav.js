import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNav = ({ match }) => {
    return (
        <nav className="user-nav">
            <ul className="menu">
                <li><NavLink to={ `${match.url}` }>Overview</NavLink></li>
                <li><NavLink to={ `${match.url}/repos` }>Repos</NavLink></li>
                <li><NavLink to={ `${match.url}/issues` }>Issues</NavLink></li>
                <li><NavLink to={ `${match.url}/info` }>Info</NavLink></li>
            </ul>
        </nav>
    )
}

export default UserNav