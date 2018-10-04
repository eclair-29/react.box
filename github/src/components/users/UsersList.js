import React from 'react'

// User Summary
import UserSummary from './UserSummary'

const UsersList = () => {
    return (
        <div className="user-list">
            {/* Map Users */}
            <UserSummary />
        </div>
    )
}

export default UsersList