import React from 'react'

/* Project Summary */
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list">
            { projects && projects.map(project => {
                return (
                    <ProjectSummary 
                        project={ project } 
                        key={ project.id } 
                    />
                )
            }) }
        </div>
    )
}

export default ProjectList