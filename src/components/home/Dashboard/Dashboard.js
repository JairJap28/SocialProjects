import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import useStyle from './styles';

// Redux
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { clearCopyRight } from '../../../redux/actions/uiActions';

// Components
import Notifications from '../Notifications/Notifications';
import ProjectList from '../../projects/ProjectList';

// MUI Stuff
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

class Dashboard extends Component {
    constructor(props){
        super(props);
        props.clearCopyRight();
    }

    render() {
        const { classes } = this.props;        
        const { projects, auth, notifications } = this.props;
        
        if (! auth.uid) return <Redirect to='/signin'/>
        return (
            <Container component="main">
                <CssBaseline />
                <div className={classes.container}>
                    <div className={classes.containerProjects}>
                        <div className={classes.projects}>
                            <ProjectList projects={projects || []}/>
                        </div>
                    </div>
                    <div className={classes.notifications}>
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </Container>
        )
        
    }
}

const mapStateToProps = (state) => ({
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
})

export default compose(
    firestoreConnect(() => [
        {
            collection: 'projects',
            orderBy: ['createdAt', 'desc']
        },
        {
            collection: 'notifications',
            limit: 3,
            orderBy: ['time', 'desc']
        }
    ]),
    connect(mapStateToProps, { clearCopyRight })    
)(withStyles(useStyle)(Dashboard));