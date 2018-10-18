// Sign In User
export const signin = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err: err.message })
        })
    }
}

// Sign Up User 
export const signup = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore() 

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                name: newUser.firstName + " " + newUser.lastName, 
                username: newUser.username
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

// Sign Out User
export const signout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}