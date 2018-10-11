export const create_project = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async callto db 
        const firestore = getFirestore()
        
        firestore.collection('projects').add({
            ...project,
            author_fname: 'Kristine',
            author_lname: 'Leyco',
            author_username: 'tinetine.o9',
            author_ID: 12345,
            created_at: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
}