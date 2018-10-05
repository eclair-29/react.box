// reducers 
import users_reducer from './users_reducer'
import repos_reducer from './repos_reducer'
import issues_reducer from './issues_reducer'
import search_reducer from './search_reducer'

// Combine Reducers
import { combineReducers } from 'redux'

const root_reducer = combineReducers({
    users: users_reducer, 
    repos: repos_reducer,
    issues: issues_reducer,
    search: search_reducer
})

export default root_reducer