import React from 'react';

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Social Projects
                </Typography>
                {links}
            </Toolbar>
        </AppBar>
    );
}

// const Navbar = (props) => {
//     const { auth, profile } = props;
//     const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedUpLinks />;
//     return (
//         <nav className="nav-wrapper grey darken-3">
//             <div className="container">
//                 <Link to='/' className="brand-logo"> Social Projects </Link>
//                 { links }
//             </div>
//         </nav>
//     )
// }

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
});

export default connect(mapStateToProps)(Navbar);