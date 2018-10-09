import axios from 'axios'

// FETCH_USERS
export const fetch_users = () => {
    return dispatch => {
        axios.get('https://api.github.com/users')
        .then(users => {
            dispatch({type: 'FETCH_USERS', payload: users.data })
        }).catch(err => console.log(err))
    }
}

// FETCH_SINGLE_USER
export const fetch_user = owner => {
    return dispatch => {
        axios.get(`https://api.github.com/users/${owner}`)
        .then(user => {
            dispatch({type: 'FETCH_SINGLE_USER', payload: user.data })
        }).catch(err => console.log(err))
    }
}