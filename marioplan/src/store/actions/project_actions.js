export const create_project = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async callto db 
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid
        
        firestore.collection('projects').add({
            ...project,
            author_fname: profile.firstName,
            author_lname: profile.lastName,
            author_username: profile.username,
            author_ID: uid,
            created_at: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
}