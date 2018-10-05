import React, { Component } from 'react'
import { connect } from 'react-redux'

// Users List
import UsersList from './UsersList'

class Users extends Component {
    render() {
        const { users } = this.props

        return (
            <div className="wrapper users">
                {/* Users List */}
                <UsersList users={ users } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(Users)