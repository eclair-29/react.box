export const create_project = project => {
    return (dispatch, getState) => {
        // Make async callto db 
        
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}