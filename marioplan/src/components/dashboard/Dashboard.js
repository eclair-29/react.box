import React, { Component } from 'react'

import ProjectList from '../projects/ProjectList' /* Project List */
import Notifications from './Notifications'       /* Notifications */


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="projects wrapper">
                    <ProjectList />
                </div>
                <div className="notifications">
                    <Notifications />
                </div>
            </div>
        )
    }
}

export default Dashboard