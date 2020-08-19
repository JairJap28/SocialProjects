import React from 'react';
import { PropTypes } from 'prop-types';

// Components
import ProjectSummary from '../ProjectSummary/ProjectSummary';
import ProjectListSkeleton from './ProjectListSkeleton';

const ProjectList = ({ projects }) => {
    const listProjects = (
        <div className="project-list section">
            { projects.map(project => (
                <ProjectSummary key={project.id} project={project}/>
            ))}
        </div>
    );

    return (
        <div>
            { projects && projects.length > 0 ? listProjects : <ProjectListSkeleton /> }
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}

export default ProjectList;