import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import useStyles from './Styles';

// Components
import SnackBarError from '../../layout/SnackError';

// Redux
import { connect } from 'react-redux';
import { createProject } from '../../../redux/actions/projectActions';
import { 
    setCopyRight,
    showSnackBarError
} from '../../../redux/actions/uiActions';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class CreateProject extends Component {
    constructor(props) {
        super(props);
        props.setCopyRight();
    }

    state = {
        title: '',
        content: '',
        error: {
            id: '',
            message: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(!this.state.title) {
            const error = {
                code: 0,
                message: 'Tittle must not be empty'
            };
            this.props.showSnackBarError(error);
            this.setState({...this.state, error: { id: 'title', message: error.message }});
            return;
        }
        else if(!this.state.content) {
            const error = {
                code: 0,
                message: 'Content must not be empty'
            };
            this.props.showSnackBarError(error);
            this.setState({...this.state, error: { id: 'content', message: error.message }});
            return;
        }

        const { title, content } = this.state;

        this.props.createProject({ title, content });
        this.props.history.push('/');
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
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div
                className={classes.container}>
                <SnackBarError />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className={classes.boxCenter}>
                    <form
                        className={classes.form}  >
                        <Typography variant="h5">
                            Create Project
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            name="title"
                            label="Title"
                            autoFocus
                            error={this.state.error && this.state.error.id === 'title'}
                            helperText={this.state.error && this.state.error.id === 'title' ? this.state.error.message : ''}
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="content"
                            name="content"
                            label="Content"
                            rowsMax={4}
                            multiline
                            error={this.state.error && this.state.error.id === 'content'}
                            helperText={this.state.error && this.state.error.id === 'content' ? this.state.error.message : ''}
                            onChange={this.handleChange}
                        />
                        <Box display="flex" flexDirection="row-reverse">
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={this.handleSubmit}>
                                Create
                            </Button>
                        </Box>
                    </form>
                </Box>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
});

const mapActionsToProps = {
    createProject,
    setCopyRight,
    showSnackBarError
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(useStyles)(CreateProject));
