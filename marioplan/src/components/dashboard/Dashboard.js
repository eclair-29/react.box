import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import ProjectList from '../projects/ProjectList' // Project List
import Notifications from './Notifications'       // Notifications

class Dashboard extends Component {
    render() {
        const { projects, auth } = this.props
        /* Checking if the user is signed in or not */
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard">
                <div className="projects wrapper">
                    <ProjectList projects={ projects } />
                </div>
                <div className="notifications">
                    <Notifications />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth 
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ 
        { collection: 'projects' }
    ])
)(Dashboard)