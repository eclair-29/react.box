import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

// User Nav
import UserNav from './UserNav'

// User Nav Links Routes
import UserOverview from './UserOverview'
import UserRepos from './UserRepos'
import UserIssues from './UserIssues'
import UserInfo from './UserInfo'

const UserDetails = ({ user, match }) => {
    return (
        <div className="user-details wrapper">
            {/* User Header */}
            <header className="user-header">
                <div className="identity">
                    <h4>{ user.name }</h4>
                    <span>{ user.login }</span>
                </div>
                <span className="followers">1,290 Followers</span>
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

const mapStateToProp = (state, own_props) => {
    let login = own_props.match.params.user 

    return {
        user: state.users.users.find(user => user.login === login)
    }
}

export default connect(mapStateToProp)(UserDetails)