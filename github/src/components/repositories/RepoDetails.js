import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions 
import { fetch_repo_details } from '../../store/actions/repo_actions'

class RepoDetails extends Component {
    componentWillMount() {
        let owner = this.props.match.params.user
        let name = this.props.match.params.repo

        this.props.fetch_repo_details(owner, name)
    }

    render() {
        const { repo } = this.props

        return (
            <div className="repo-details wrapper">
                <div className="repo-header">
                    <h4>{ repo.name }</h4>
                    <span>repo by: { this.props.match.params.user }</span>
                </div>
                <div className="repo-description">
                    { repo.description ? (
                        <p>{ repo.description }</p>
                    ) : (
                        <div>No Description</div>
                    ) }
                </div>
                <div className="repo-stats">
                    <h6>Repo Status</h6>
                    <div className="stats">
                        <span>Forks: { repo.forks_count }</span>
                        <span>Stars: { repo.stargazers_count }</span>
                        <span>Subscribers: {repo.subscribers_count}</span>
                        <span>issues: { repo.open_issues_count }</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        repo: state.repos.repo
    }
}

export default connect(mapStateToProps, { fetch_repo_details })(RepoDetails)