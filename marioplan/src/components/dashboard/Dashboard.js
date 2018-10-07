import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import ProjectList from '../projects/ProjectList' // Project List
import Notifications from './Notifications'       // Notifications

class Dashboard extends Component {
    render() {
        const { projects } = this.props
        
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
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)