import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    render() {
        const { authError, auth } = this.props;

        if(auth.uid) return <Redirect to='/'/>

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
                        </button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    auth: state.firebase.auth
});

export default connect(mapStateToProps, { signIn })(SignIn);
