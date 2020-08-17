import React from 'react';
import { PropTypes } from 'prop-types';

// Components
import ProjectSummary from './ProjectSummary/ProjectSummary'

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => (
                <ProjectSummary key={project.id} project={project}/>
            ))}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}

export default ProjectList;