import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Layouts
import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'

const Nav = () => {
    return (
        <nav className="nav wrapper">
            <Link to='/'><h6 className="logo">Mario Plan</h6></Link>
            <SignedInLinks />
            {/* <SignedOutLinks /> */}
        </nav>
    ) 
}

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(Nav)