import axios from 'axios'
import { access_token } from '../../configs/access_token'

export const search_users = query => {
    return dispatch => {
        axios.request({
            url: `/search/users?q=${query}`,
            mehtod: 'get',
            baseURL: 'https://api.github.com/',
            data: {
                client_id: access_token.client_ID,
                client_secret: access_token.client_secret
            }
        })
        .then(users => {
            dispatch({ 
                type: 'SEARCH_USERS',
                payload: users.data.items
            })
        }).catch(err => console.log(err))
    }
}