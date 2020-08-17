import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNOUT_SUCCESS,
    SET_ERROR_SNACKBAR
} from '../types';

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        if (!credentials.email || !credentials.password) {
            const error = {
                code: undefined,
                message: 'Email and password must not be empty'
            }
            dispatch({ type: LOGIN_ERROR, err: error});
            dispatch({ type: SET_ERROR_SNACKBAR, err: error });
        } else {
            const firebase = getFirebase();

            firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then(() => {
                dispatch({ type: LOGIN_SUCCESS });
            }).catch(err => {
                dispatch({ type: LOGIN_ERROR, err });
                dispatch({ type: SET_ERROR_SNACKBAR, err });
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

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({ type: SIGNUP_SUCCESS });
        }).catch(err => {
            dispatch({ type:  SIGNUP_ERROR, err});
        });
    }   
}