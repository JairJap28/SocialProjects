import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createProject(this.state);
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title"> Title </label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content"> Content </label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapActionsToProps = {
    createProject
}

export default connect(null, mapActionsToProps)(CreateProject);
