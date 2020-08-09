import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

// MUI Stuff
import Button from '@material-ui/core/Button';

const SignedInLinks = ({ signOut, profile: { initials } }) => {
    return (
        <Fragment>
            <Button color="inherit">New Project</Button>
        </Fragment>
    )
}

{/* <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/signin" onClick={() => signOut()}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{initials}</NavLink></li>
        </ul> */}

export default connect(null, { signOut })(SignedInLinks);