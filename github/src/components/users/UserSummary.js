import React from 'react'
import { Link } from 'react-router-dom'

const UserSummary = ({ user }) => {
    return (
        <Link to={ `/${user.login}` }>
            <div className="user ui card">
                <div className="content">
                    <h6>{ user.login }</h6>
                    <span>{ user.type }</span>
                </div>

                <div className="content">
                    <span>Repositories: Click to view</span>
                    <span>issues: Click to view</span>
                </div>
            </div>
        </Link>
    )
}

export default UserSummary
