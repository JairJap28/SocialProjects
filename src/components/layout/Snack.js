import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

// Redux Stuff
import { connect } from 'react-redux';
import { clearErrors } from '../../redux/actions/uiActions';

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
    alert: {
        top: 90,
        right: 20,
        position: 'absolute'
    }
}));


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

const Snack = (props) => {
    const classes = useStyles();
    const { ui: { snackBar } } = props;

    const [state ] = React.useState({
        vertical: 'top',
        horizontal: 'right'
    });

    const { vertical, horizontal } = state;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.clearErrors();
    };

    return (
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
            open={snackBar.state}
            autoHideDuration={3000}
            onClose={handleClose}
            className={classes.alert}>
            <Alert severity={snackBar.type}>{snackBar.message}</Alert>
        </Snackbar>
    )
}

const mapStateToProps = (state) => ({
    ui: state.ui
});

export default connect(mapStateToProps, { clearErrors })(Snack);
