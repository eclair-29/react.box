import React from  'react' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = ({ project, auth }) => {
    /* Checking if the user is signed in or not */
    if (!auth.uid) return <Redirect to='/signin' />
    
    if (project) {
        return (
            <div className="project-details wrapper">
                <div className="header">
                    <span className="title">{ project.title }</span>
                    <span>Posted by: { project.author_fname } { project.author_lname }</span>
                </div>
                <div className="content">{ project.content }</div>
                <div className="footer">
                    <span>{ moment(project.created_at.toDate()).fromNow() }</span>
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
        project: project,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)