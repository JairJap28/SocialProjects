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
import ProjectList from '../../projects/ProjectList/ProjectList';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const DashPositioned = ({ classes, theme, projects, notifications }) => {
    const matches = useMediaQuery(theme.breakpoints.only('xs'));

    const [position, setPosition] = React.useState({
        direction: 'column',
        notifications: 1,
        dashboard: 2
    });

    React.useEffect(() => {
        if (matches) setPosition({ direction: 'column', notifications: 1, dashboard: 2 });
        else setPosition({ direction: 'row', dashboard: 1, notifications: 2 });
    }, [matches]);

    return (
        <Container component="main">
                <CssBaseline />
                <Box display="flex" flexDirection={position.direction}>
                    <Box className={classes.containerProjects} order={position.dashboard}>
                        <div className={classes.projects}>
                            <ProjectList projects={projects || []} />
                        </div>
                    </Box>
                    <Box className={classes.notifications} order={position.notifications}>
                        <Notifications notifications={notifications}/>
                    </Box>
                </Box>
            </Container>
    );
}

class Dashboard extends Component {
    constructor(props){
        super(props);
        props.clearCopyRight();
    }

    state = {
        direction: 'column',
        notifications: 1,
        dashboard: 2,
    }

    render() {
        const { classes, theme } = this.props;        
        const { projects, auth, notifications } = this.props;
        
        if (! auth.uid) return <Redirect to='/signin'/>
        return (
            <DashPositioned 
                classes={classes}
                theme={theme} 
                projects={projects}
                notifications={notifications} />
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
)(withStyles(useStyle, { withTheme: true })(Dashboard));