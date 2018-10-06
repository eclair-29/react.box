import React, { Component } from 'react'
import { connect } from 'react-redux'
 
// Repos List
import ReposList from './ReposList'

class Repos extends Component {
    render() {
        const { repos } = this.props

        return (
            <div className="wrapper repos">
                <ReposList repos={ repos } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        repos: state.repos.repos
    }
}

export default connect(mapStateToProps)(Repos)