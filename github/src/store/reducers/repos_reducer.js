const initial_state = {
    repos: [],
    repo: {}
}

const repos_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'FETCH_PUBLIC_REPOS':
            return {
                ...state,
                repos: action.payload
            }

        case 'FETCH_REPO_DETAILS':
            return {
                ...state,
                repo: action.payload
            }

        case 'FETCH_USER_REPOS': 
            return {
                ...state,
                repos: action.payload
            }

        default:
            return state
    }
}

export default repos_reducer