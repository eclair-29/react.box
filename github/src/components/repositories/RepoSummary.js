import React from 'react'
import { Link } from 'react-router-dom'

const RepoSummary = ({ repo }) => {
    return (
        <Link to={ `/repos/${repo.id}` }>
            <div className="repo ui card">
                <div className="content">
                    <h6>{ repo.name }</h6>
                    <span>by: { repo.login }</span>
                </div>
                <div className="content">
                    <span>Forks: 10</span>
                    <span>Stars: 80</span>
                    <span>Open Issues: 0</span>
                    <span>License by: MIT</span>
                </div>
            </div>
        </Link>
    )
}

export default RepoSummary