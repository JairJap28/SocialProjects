import {
    CREATE_PROJECT,
    CREATE_PROJECT_ERROR
} from '../types';

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Jair',
            authorLastName: 'Jimenez',
            authorId: 123456,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: CREATE_PROJECT,
                project
            });
        }).catch(err => {
            dispatch({
                type: CREATE_PROJECT_ERROR,
                err
            });
        })   
    }
};