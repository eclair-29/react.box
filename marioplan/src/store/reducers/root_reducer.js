import auth_reducer from './auth_reducer'
import project_reducer from './project_reducer'

/* redux combine reducers */
import { combineReducers } from 'redux'

/* firestore reducer */
import { firestoreReducer } from 'redux-firestore'

const root_reducer = combineReducers({
    auth: auth_reducer,
    project: project_reducer ,
    firestore: firestoreReducer
})

export default root_reducer