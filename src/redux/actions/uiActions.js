import {
    SET_ERROR_SNACKBAR,
    SET_COPYRIGHT,
    CLEAR_ERRORS_SNACKBAR,
    CLEAR_COPYRIGHT
} from '../types';

export const clearErrors = () => {
    return (dispatch, getState) => {
        dispatch({ type: CLEAR_ERRORS_SNACKBAR });
    }
};

export const showSnackBarError = (error) => {
    return (dispatch, getState) => {
        console.log(error);
        dispatch({ type:  SET_ERROR_SNACKBAR, err: error });
    }
};

export const setCopyRight = () => {
    return (dispatch, getState) => {
        dispatch({ type: SET_COPYRIGHT });
    }
};

export const clearCopyRight = () => {
    return (dispatch, getState) => {
        dispatch({ type: CLEAR_COPYRIGHT });
    }
};