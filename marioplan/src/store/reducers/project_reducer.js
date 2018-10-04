const initial_state = {
    projects: [
        { id: 'xbD489o', title: 'The Cititech Project', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic temporibus, earum non veritatis voluptate sed officia harum debitis aperiam nam.' },
        { id: 'mDCec48', title: 'The Mario Plan', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic temporibus, earum non veritatis voluptate sed officia harum debitis aperiam nam.' },
    ]
} 

const project_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('PROJECT CREATED: ', action.project)
            return state
        
        case 'CREATE_PROJECT_ERROR':
            console.log('ERROR: ', action.err)
            return state

        default:
            return state
    }
}

export default project_reducer