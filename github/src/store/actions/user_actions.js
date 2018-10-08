import axios from 'axios'

// Fetch all Users
export const fetch_users = () => {
    return dispatch => {
        axios.get('https://api.github.com/users')
        .then(users => {
            dispatch({
                type: 'FETCH_USERS',
                payload: users.data.slice(0, 10)
            })
        }).catch(err => console.log(err))
    }
}

// Fetch Single User
export const fetch_user = (owner) => {
    return dispatch => {
        axios.get(`https://api.github.com/users/${owner}`)
        .then(user => {
            dispatch({
                type: 'FETCH_SINGLE_USER',
                payload: user.data
            })
        }).catch(err => console.log(err))
    }
}