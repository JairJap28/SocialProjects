import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import useStyles from './Styles';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../../redux/actions/authActions';

// Components
import CopyRight from '../../layout/CopyRight';
import SignInCharacter from './SignInCharacter';

// MUI Stuff
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

const SignIn = () => {
    const classes = useStyles();
    return (
        <Container component="main">
            <CssBaseline />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={3}>
                    <SignInCharacter />
                </Grid>
                <Grid item xs={7}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar} >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
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
            
            <Box mt={8}>
                <CopyRight />
            </Box>
        </Container>
    );
}

// class SignIn extends Component {
//     state = {
//         email: '',
//         password: ''
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.signIn(this.state);
//         this.setState({ email: '', password: '' });
//     }

//     handleChange = (event) => {
//         const { id, value } = event.target;
//         this.setState({
//             [id]: value
//         });
//     }

//     render() {
//         const { authError, auth } = this.props;

//         if(auth.uid) return <Redirect to='/'/>

//         return (
//             <div className="container">
//                 <form onSubmit={this.handleSubmit} className="white">
//                     <h5 className="grey-text text-darken-3">
//                         Sign In
//                     </h5>
//                     <div className="input-field">
//                         <label htmlFor="email"> Email </label>
//                         <input type="email" id="email" value={this.state.email} onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-field">
//                         <label htmlFor="password"> Password </label>
//                         <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-field">
//                         <button className="btn pink lighten-1 z-depth-0">
//                             Login
//                         </button>
//                         <div className="red-text center">
//                             {authError ? <p>{authError}</p> : null }
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    auth: state.firebase.auth
});

export default connect(mapStateToProps, { signIn })(SignIn);
