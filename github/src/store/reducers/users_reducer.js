const initial_state = {
    users: [], 
    user: {}
}

const users_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'FETCH_USERS': 
            return {
                ...state,
                users: action.payload
            }

        case 'FETCH_SINGLE_USER':
            return {
                ...state,
                user: action.payload
            }

        default: 
            return state
    }
}

export default users_reducer