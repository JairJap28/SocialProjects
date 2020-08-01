import {
    ADD_PROJECT
} from '../types';

export const createProject = (project) => (dispatch) => {
    dispatch({
        type: ADD_PROJECT,
        project
    });
}