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
            })
    }
}

// Fetch Single User
export const fetch_user = (user_login) => {
    return dispatch => {
        axios.get(`https://api.github.com/users/${user_login}`)
            .then(user => {
                dispatch({
                    type: 'FETCH_SINGLE_USER',
                    payload: user.data
                })
            })
    }
}