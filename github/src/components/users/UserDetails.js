import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

// User Nav
import UserNav from './UserNav'

// User Nav Links Routes
import UserOverview from './UserOverview'
import UserRepos from './UserRepos'
import UserIssues from './UserIssues'
import UserInfo from './UserInfo'

// Actions 
import { fetch_user } from '../../store/actions/user_actions'

class UserDetails extends Component {
    componentWillMount() {
        const param = this.props.match.params.user
        this.props.fetch_user(param)
    }

    render() {
        const { user, match } = this.props

        return (
            <div className="user-details wrapper">
                {/* User Header */}
                <header className="user-header">
                    <div className="identity">
                        <h4>{ user.name }</h4>
                        <span>{ user.login }</span>
                    </div>
                    <span className="followers">{ user.followers } Followers</span>
                </header>

                {/* User Navigation */}
                <UserNav match={ match } />

                {/* Routes */}
                <Switch>
                    <Route exact path={ `${match.path}` } component={ UserOverview } />
                    <Route exact path={ `${match.path}/repos` } component={ UserRepos } />
                    <Route exact path={ `${match.path}/issues` } component={ UserIssues } />
                    <Route exact path={ `${match.path}/info` } component={ UserInfo } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    }
}

export default connect(mapStateToProps, { fetch_user })(UserDetails)