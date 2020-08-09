import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// MUI Stuff
import Button from '@material-ui/core/Button';

const SignedUpLinks = () => {
    return (
        <Fragment>
            <Button color="inherit" component={NavLink} to="/signup">Sign Up</Button>
            <Button color="inherit" component={NavLink} to="/signin">Log In</Button>
        </Fragment>
    )
}

export default SignedUpLinks;