const initial_state = {
    options: []
}

const search_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'SEARCH_USERS':
            return {
                ...state, 
                options: action.payload
            }

        default:
            return state
    }
}

export default search_reducer