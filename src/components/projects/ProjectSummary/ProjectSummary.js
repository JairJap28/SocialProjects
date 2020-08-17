import React from 'react';
import { useHistory } from "react-router";
import { PropTypes } from 'prop-types';
import moment from 'moment';
import useStyles from './Styles';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const ProjectSummary = ({ project }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/project/${project.id}`);
    }

    return (
        <Card 
            className={classes.card}
            onClick={handleCardClick}>
            <CardContent>
                <Typography variant="subtitle1">
                    {project.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Posted by { `${project.authorFirstName} ${project.authorLastName}` }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {moment(project.createdAt.toDate()).calendar()}
                </Typography>
            </CardContent>
        </Card>
    )
}

ProjectSummary.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectSummary;