import React from 'react';
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

const SignedInLinks = ({ signOut, profile: { initials } }) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/signin" onClick={() => signOut()}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{initials}</NavLink></li>
        </ul>
    )
}

export default connect(null, { signOut })(SignedInLinks);