import React, { Component } from 'react'

// Repos List
import ReposList from './ReposList'

class Repos extends Component {
    render() {
        return (
            <div className="wrapper repos">
                <ReposList />
            </div>
        )
    }
}

export default Repos