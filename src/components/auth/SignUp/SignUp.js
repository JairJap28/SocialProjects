import React, { Fragment } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import useStyles from './Styles';

// Redux
import { connect } from 'react-redux';
import { signUp } from '../../../redux/actions/authActions';
import { setCopyRight } from '../../../redux/actions/uiActions';


// Components
import Snack from '../../layout/Snack';
import Character from '../Character/Character';

// MUI Stuff
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const SignUp = (props) => {
    const classes = useStyles();
    const { auth } = props;

    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    React.useEffect(() => {
        props.setCopyRight()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.signUp(user);
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUser({
            ...user,
            [id]: value
        });
    }

    return (
        <Fragment>
            {auth.uid ? (
                <Redirect to='/' />
            ) : (
                    <Container component="main">
                        <CssBaseline />
                        <Snack />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className={classes.container}>
                            <Grid item xs={12} sm={7}>
                                <div className={classes.paper}>
                                    <Avatar className={classes.avatar}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign up
                                    </Typography>
                                    <form className={classes.form} noValidate>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    autoComplete="fname"
                                                    name="firstName"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="firstName"
                                                    label="First Name"
                                                    autoFocus
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="lastName"
                                                    label="Last Name"
                                                    name="lastName"
                                                    autoComplete="lname"
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                            onClick={handleSubmit}
                                        >
                                            Sign Up
                                        </Button>
                                        <Grid container justify="flex-end">
                                            <Grid item>
                                                <Link component={NavLink} to="/signin" variant="body2">
                                                    Already have an account? Sign in
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                            <Grid item xs={3}
                                component={Box}
                                display={{ xs: "none", sm: "block", lg: "block" }} >
                                <Character value={true} />
                            </Grid>
                        </Grid>
                    </Container>
                )}
        </Fragment>        
    );
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    authError: state.auth.authError
});

export default connect(mapStateToProps, { signUp, setCopyRight })(SignUp);
