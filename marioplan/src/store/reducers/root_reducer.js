import auth_reducer from './auth_reducer'
import project_reducer from './project_reducer'

/* redux combine reducers */
import { combineReducers } from 'redux'

/* firestore & Firebase reducer */
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const root_reducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: auth_reducer,
    project: project_reducer
})

export default root_reducer