import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

// MUI Stuff
import Button from '@material-ui/core/Button';
import { Avatar, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    avatar: {
        marginLeft: 15,
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
    }
}));

const SignedInLinks = ({ signOut, profile: { initials } }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Button 
                color="inherit"
                component={NavLink}
                to="/create">
                New Project
            </Button>
            <Button 
                color="inherit" 
                onClick={() => signOut()} 
                component={NavLink} 
                to="/signin">
                Log Out
            </Button>
            <Avatar className={classes.avatar}>
                {initials}
            </Avatar>
        </Fragment>
    )
}

export default connect(null, { signOut })(SignedInLinks);