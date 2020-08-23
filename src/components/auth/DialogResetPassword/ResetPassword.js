import React from 'react';

// Redux Stuff
import { connect } from 'react-redux';
import { clearUI } from '../../../redux/actions/uiActions';
import { resetPassword } from '../../../redux/actions/authActions';

// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ResetPassword = (props) => {
    const { open, error } = props.ui;
    const [ email, setEmail ] = React.useState('');

    const handleClose = () => {
        props.clearUI();
    };

    const handleReset = () => {
        props.resetPassword(email);
    }

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the email address you used to sign up for a Social Projects account.
                        We will send you and email containing a link to reset your Password.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        error={Boolean(error)}
                        helperText={error}
                        fullWidth
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleReset} color="primary">
                        Reset
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ui: state.ui
})

const mapActionToProps = {
    clearUI,
    resetPassword
}

export default connect(mapStateToProps, mapActionToProps)(ResetPassword);
