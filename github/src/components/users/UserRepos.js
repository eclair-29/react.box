import React, { Component } from 'react'
import { connect } from 'react-redux'

// Repos List
import ReposList from '../repositories/ReposList'

// Actions 
import { fetch_user_repos } from '../../store/actions/repo_actions'

class UserRepos extends Component {
    componentWillMount() {
        let user = this.props.match.params.user
        this.props.fetch_user_repos(user)
    }

    render() {
        const { repos } = this.props

        return (
            <div className="user-repos">
                <h6 style={{ 
                        textAlign: 'center', 
                        margin: '20px 0',
                        fontSize: '0.9rem' }}>{ repos.length } Repos</h6>
                <ReposList repos={ repos } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        repos: state.repos.repos
    }
}

export default connect(mapStateToProps, { fetch_user_repos })(UserRepos)