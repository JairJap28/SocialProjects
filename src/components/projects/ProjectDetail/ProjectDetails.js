import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import useStyles from './Styles';

// Redux
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { setCopyRight } from '../../../redux/actions/uiActions';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const ProjectDetails = (props) => {
    const { project, auth } = props;
    const classes = useStyles();

    React.useEffect(() => {
        props.setCopyRight();
    }, []);

    if(!auth.uid) return <Redirect to='/signin'/>

    if (project) {
        return (
            <div className={classes.main}>
                <Card className={classes.card}>
                    <CardHeader title={project.title} />
                    <Divider variant="middle"/>
                    <CardContent>
                        <Typography variant="body1">
                            {project.content}
                        </Typography>
                        <Typography variant="body2">
                            Posted by <span className={classes.postedBy}>{`@${project.authorFirstName} ${project.authorLastName}`}</span>
                        </Typography>
                        <Typography variant="body2" className={classes.date}>
                            {moment(project.createdAt.toDate()).calendar()}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const projectId = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[projectId] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

const mapStateToActions = {
    setCopyRight
};

export default compose(
    connect(mapStateToProps, mapStateToActions),
    firestoreConnect(() => ['projects'])
)(ProjectDetails);
