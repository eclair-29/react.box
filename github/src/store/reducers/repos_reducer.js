import uuid from 'uuid'

const initial_state = {
    repos: [
        // Dummy Data
        { id: uuid(), login: 'octocat', name: 'Github api', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, accusantium. Autem, molestiae eveniet. Maxime ea doloremque deleniti officia doloribus laudantium?' },
        { id: uuid(), login: 'tinetine.o9', name: 'Using Resful API services using React JS', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, accusantium. Autem, molestiae eveniet. Maxime ea doloremque deleniti officia doloribus laudantium?' },
        { id: uuid(), login: 'tinetine.o9', name: 'React Router: Nested Routes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, accusantium. Autem, molestiae eveniet. Maxime ea doloremque deleniti officia doloribus laudantium?' }
    ]
}

const repos_reducer = (state = initial_state, action) => {
    return state
}

export default repos_reducer