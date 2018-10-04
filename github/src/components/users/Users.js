import React, { Component } from 'react'

// Users List
import UsersList from './UsersList'

class Users extends Component {
    render() {
        return (
            <div className="wrapper users">
                {/* Users List */}
                <UsersList />
            </div>
        )
    }
}

export default Users