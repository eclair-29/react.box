import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProjectList from '../projects/ProjectList' /* Project List */
import Notifications from './Notifications'       /* Notifications */

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="projects wrapper">
                    <ProjectList projects={ this.props.projects } />
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
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)