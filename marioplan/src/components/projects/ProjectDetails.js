import React from  'react' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = ({ project }) => {
    if (project) {
        return (
            <div className="project-details wrapper">
                <div className="header">
                    <h4 className="title">{ project.title }</h4>
                    <span>Posted by: { project.author_fname } { project.author_lname }</span>
                </div>
                <div className="content">{ project.content }</div>
                <div className="footer">
                    <span>29th November, 2am</span>
                </div>
            </div>
        )
    } else {
        return <p style={{ textAlign: 'center', marginTop: '40px' }}>Loading Project...</p>
    }
}

const mapStateToProps = (state, own_props) => {
    let id = own_props.match.params.id
    let projects = state.firestore.data.projects 
    let project = projects ? projects[id] : null

    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)