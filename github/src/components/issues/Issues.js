import React, { Component } from 'react'

// Issues List
import IssuesList from './IssuesList'

class Issues extends Component {
    render() {
        return (
            <div className="wrapper issues">
                <IssuesList />
            </div>
        )
    }
}

export default Issues