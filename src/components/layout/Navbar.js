import React from 'react';
import icon from '../../assets/images/Icon.png'

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// Icons Stuff
import InfoIcon from '@material-ui/icons/Info';

// Redux
import { connect } from 'react-redux';

// Components
import SignedInLinks from './SignedInLinks';
import SignedUpLinks from './SignedUpLinks';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = (props) => {
    const classes = useStyles();
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedUpLinks />;
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src={icon} alt="Icon app" width="32px" height="32px"/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Social Projects
                </Typography>
                {links}
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
});

export default connect(mapStateToProps)(Navbar);