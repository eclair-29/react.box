import React from 'react'
import { connect } from 'react-redux'

const RepoDetails = ({ repo }) => {
    console.log(repo)
    return (
        <div className="repo-details wrapper">
            <div className="repo-header">
                <h4>{ repo.name }</h4>
                <span>repo by: { repo.login }</span>
            </div>
            <div className="repo-description">
                <p>{ repo.description }</p>
            </div>
            <div className="repo-stats">
                <h6>Repo Status</h6>
                <div className="stats">
                    <span>Forks: 10</span>
                    <span>Stars: 90</span>
                    <span>watchers: 32</span>
                    <span>issues: 0</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, own_props) => {
    let id = own_props.match.params.repo 

    return {
        repo: state.repos.repos.find(repo => repo.id === id)
    }
}

export default connect(mapStateToProps)(RepoDetails)