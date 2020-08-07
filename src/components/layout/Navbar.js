import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import SignedInLinks from './SignedInLinks';
import SignedUpLinks from './SignedUpLinks';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedUpLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"> Social Projects </Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navbar);