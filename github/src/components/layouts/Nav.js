import React from 'react'
import { Link } from 'react-router-dom'

// Search
import Search from './Search'

// Nav Links
import NavLinks from './NavLinks'

const Nav = () => {
    return (
        <nav className="nav">
            {/* Logo */}
            <Link to='/'>
                <h4 className="logo">Github api</h4>
            </Link>

            {/* Search */}
            <Search />

            {/* Nav Links */}
            <NavLinks />
        </nav>
    )
}

export default Nav