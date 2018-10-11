const initial_state = {
    authError: null 
}

const auth_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log(action.err)
            return {
                ...state,
                authError: action.err
            }

        case 'LOGIN_SUCCESS':
           console.log('LOGIN SUCCESS')
           return {
               ...state,
               authError: null
           }

        case 'SIGNOUT_SUCCESS': 
           console.log('SIGNOUT SUCCESS')
           return state

        default:
            return state
    }
}

export default auth_reducer