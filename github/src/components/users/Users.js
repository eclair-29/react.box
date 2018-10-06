import React, { Component } from 'react'
import { connect } from 'react-redux'

// Users List
import UsersList from './UsersList'

// Actions
import { fetch_users } from '../../store/actions/user_actions'

class Users extends Component {
    componentWillMount() {
        this.props.fetch_users()
    }

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



export default connect(mapStateToProps, { fetch_users })(Users)