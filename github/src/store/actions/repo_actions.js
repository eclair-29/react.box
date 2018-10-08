import axios from 'axios'

// Fetch All Public Repos
export const fetch_public_repos = () => {
    return dispatch => {
        axios.get('https://api.github.com/repositories')
        .then(repos => {
            dispatch({ 
                type: 'FETCH_PUBLIC_REPOS',
                payload: repos.data.slice(0,10)
                })
        }).catch(err => console.log(err))
    }
}

// Fetch Repo Details 
export const fetch_repo_details = (owner, name) => {
    return dispatch => {
        axios.get(`https://api.github.com/repos/${owner}/${name}`)
        .then(repo => {
            dispatch({ 
                type: 'FETCH_REPO_DETAILS',
                payload: repo.data
            })
        }).catch(err => console.log(err))
    }
} 

// Fetch User Repos
export const fetch_user_repos = owner => {
    return dispatch => {
        axios.get(`https://api.github.com/users/${owner}/repos`)
        .then(repos => {
            dispatch({ 
                type: 'FETCH_USER_REPOS',
                payload: repos.data
            })
        }).catch(err => console.log(err))
    }
} 
