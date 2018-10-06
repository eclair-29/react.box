import React from 'react'
import { connect } from 'react-redux'

// Repos List
import ReposList from '../repositories/ReposList'

const UserRepos = ({ repos }) => {
    return (
        <div className="user-repos">
            <ReposList repos={ repos } />
        </div>
    )
}

const mapStateToProps = (state, own_props) => {
    let login = own_props.match.params.user 

    return{
        repos: state.repos.repos.filter(repo => repo.login === login)
    }
}

export default connect(mapStateToProps)(UserRepos)