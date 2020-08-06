import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => (
                <Link key={project.id} to={`/project/${project.id}`}>
                    <ProjectSummary project={project}/>
                </Link>
            ))}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}

export default ProjectList;