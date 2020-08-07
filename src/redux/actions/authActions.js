import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNOUT_SUCCESS
} from '../types';

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        if (!credentials.email || !credentials.password) {
            const error = {
                code: undefined,
                message: 'Email and password must not be empty'
            }
            dispatch({ type: LOGIN_ERROR, err: error});
        } else {
            const firebase = getFirebase();

            firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then(() => {
                dispatch({ type: LOGIN_SUCCESS });
            }).catch(err => {
                dispatch({ type: LOGIN_ERROR, err });
            })
        }
    }
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        
        firebase.auth().signOut().then(() => {
            dispatch({ type: SIGNOUT_SUCCESS });
        });
    }
}