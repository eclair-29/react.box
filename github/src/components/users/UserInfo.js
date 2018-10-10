import React from 'react'

const UserInfo = ({ user }) => {
    return (
        <div className="user-info">
            {/* User Bio */}
            <div className="bio">
                <h6>Bio</h6>
                { user.bio ? (
                    <p>{ user.bio }</p>
                ) : (
                    <p>Bio not set</p>
                ) }
            </div>

            {/* User Company */}
            <div className="company">
                <h6>Company</h6>
                { user.company ? (
                    <p>{ user.company }</p>
                ) : (
                    <p>No Company</p>
                ) }
            </div>

            {/* User Location */}
            <div className="location">
                <h6>Address</h6>
                { user.location ? (
                    <p>{ user.location }</p>
                ) : (
                    <p>Address not set</p>
                ) }
            </div>
        </div>
    )
}

export default UserInfo