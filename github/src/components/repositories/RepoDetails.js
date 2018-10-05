import React from 'react'

const RepoDetails = () => {
    return (
        <div className="repo-details wrapper">
            <div className="repo-header">
                <h4>Github api</h4>
                <span>repo by: octocat</span>
            </div>
            <div className="repo-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi omnis ipsum illum quisquam a ex quibusdam dolorum aut nobis veniam!
                </p>
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

export default RepoDetails