import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProjectSummary = ({ project }) => {
    return (
        <Link to={ `/projects/${project.id}` }>
            <div className="ui card">
                {/* Header */}
                <div className="content">
                    <span className="header">{ project.title }</span>
                    <span className="meta">Posted by: { project.author_username }</span>
                </div>

                {/* Content */}
                <div className="content">
                    <div className="description time">{ moment(project.created_at.toDate()).fromNow() }</div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectSummary