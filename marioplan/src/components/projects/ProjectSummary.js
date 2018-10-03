import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({ project }) => {
    return (
        <Link to={ `/projects/${project.id}` }>
            <div className="ui card">
                <div className="content">
                    <h4 className="header">{ project.title }</h4>
                    <span className="meta">Posted by: eclair.48</span>
                </div>
                <div className="content">
                    <div className="description time">29th November, 2am</div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectSummary