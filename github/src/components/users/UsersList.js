import React from 'react'

// User Summary
import UserSummary from './UserSummary'

const UsersList = ({ users }) => {
    return (
        <div className="user-list">
            {/* Map Users */}
            { users.length ? (
                users.map(user => <UserSummary user={ user } key={ user.id } />)
            ) : (
                <p style={{ textAlign: 'center' }}>No users found</p>
            ) }            
        </div>
    )
}

export default UsersList