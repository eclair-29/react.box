import React from 'react'

// User Nav
import UserNav from './UserNav'

const UserDetails = () => {
    return (
        <div className="user-details wrapper">
            {/* User Header */}
            <header className="user-header">
                <div className="identity">
                    <h4>Miguel De Chavez</h4>
                    <span>eclair.48</span>
                </div>
                <span className="followers">1,290 Followers</span>
            </header>

            {/* User Navigation */}
            <UserNav />
        </div>
    )
}

export default UserDetails