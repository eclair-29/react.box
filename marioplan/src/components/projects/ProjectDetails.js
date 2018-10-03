import React from  'react' 

const ProjectDetails = props => {
    const id = props.match.params.id

    return (
        <div className="project-details wrapper">
            <div className="header">
                <h4 className="title">Project Title - { id }</h4>
                <span>Posted by: Miguel</span>
            </div>
            <div className="content">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic temporibus, earum non veritatis voluptate sed officia harum debitis aperiam nam.
            </div>
            <div className="footer">
                <span>29th November, 2am</span>
            </div>
        </div>
    )   
}

export default ProjectDetails