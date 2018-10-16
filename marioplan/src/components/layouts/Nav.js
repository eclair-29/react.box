import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Layouts
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Nav = ({ auth, profile }) => {
    const links = auth.uid ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />

    return (
        <nav className="nav wrapper">
            <Link to='/'><h6 className="logo">Mario Plan</h6></Link>
            
            {/* Nav Links */}
            { links }
        </nav>
    ) 
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Nav)