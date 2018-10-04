import React from 'react'
import { Link } from 'react-router-dom'

const UserSummary = () => {
    return (
        <Link to='/'>
            <div className="user ui card">
                <div className="content">
                    <h6>octocat</h6>
                    <span>Admin</span>
                </div>
                <div className="content">
                    <span>Repositories: 90</span>
                    <span>issues: 40</span>
                </div>
            </div>
        </Link>
    )
}

export default UserSummary
