import React from 'react'
import { Link } from 'react-router-dom'
 
const RepoSummary = ({ repo }) => {
    return (
        <Link to={ `/repos/${repo.owner.login}/${repo.name}` }>
            <div className="repo ui card">
                <div className="content">
                    <h6>{ repo.name }</h6>
                    <span>by: { repo.owner.login }</span>
                </div>

                <div className="content">
                    <div 
                        className="description"
                        style={{ 
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                         }}
                    >
                        { repo.description ? (repo.description) : (
                            <i>No description</i>
                        ) }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RepoSummary