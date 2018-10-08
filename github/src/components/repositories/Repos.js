import React, { Component } from 'react'
import { connect } from 'react-redux'
 
// Repos List
import ReposList from './ReposList'

// Actions 
import { fetch_public_repos } from '../../store/actions/repo_actions'

class Repos extends Component {
    componentWillMount() {
        this.props.fetch_public_repos()
    }
    
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

export default connect(mapStateToProps, { fetch_public_repos })(Repos)