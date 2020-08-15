import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import styles from './Styles';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../../redux/actions/authActions';
import { 
    showSnackBarError,
    setCopyRight
} from '../../../redux/actions/uiActions';

// Components
import SignInCharacter from './SignInCharacter';
import SnackError from '../../layout/SnackError';

// MUI Stuff
import { withStyles } from '@material-ui/core/styles'; 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class SignIn extends Component {
    constructor(props) {
        super(props);
        props.setCopyRight();
    }

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    render() {
        const { classes } = this.props;
        const { auth } = this.props;

        if(auth.uid) return <Redirect to='/'/>

        return (
            <Container component="main">
                <CssBaseline />
                <SnackError />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.container}>
                    <Grid item xs={3}
                        component={Box}
                        display={{ xs: "none", sm: "block", lg: "block" }} >
                        <SignInCharacter />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar} >
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleChange}
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={this.handleChange}
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                            </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link component={NavLink} to="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
};

const mapStateToProps = (state) => ({
    ui: state.ui,
    authError: state.auth.authError,
    auth: state.firebase.auth
});

const mapActionsToProps = {
    signIn,
    showSnackBarError,
    setCopyRight
}

export default connect(mapStateToProps, mapActionsToProps )(withStyles(styles, { widthTheme: true })(SignIn));