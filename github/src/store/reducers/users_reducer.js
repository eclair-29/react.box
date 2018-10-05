import uuid from 'uuid'

const initial_state = {
    users: [
        // Dummy Data
        { id: uuid(), login: 'octocat', name: 'Miguel De Chavez', type: 'Admin' },
        { id: uuid(), login: 'tinetine.o9', name: 'Kristine Leyco', type: 'Moderator' }
    ]
}

const users_reducer = (state = initial_state, action) => {
    return state
}

export default users_reducer