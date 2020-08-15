import {
    CLEAR_UI,
    CLEAR_ERRORS_SNACKBAR,
    CLEAR_SUCCESS_SNACKBAR,
    CLEAR_COPYRIGHT,
    SET_ERROR_SNACKBAR,
    SET_COPYRIGHT
} from '../types';

const initialState = {
    copyRight: false,
    snackBarError: {
        state: false, 
        message: false
    },
    snackBarSuccess: {
        state: false, 
        message: false
    }
};

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_UI: 
            return {
                snackBarError: { state: false, message: '' },
                snackBarSuccess: { state: false, message: '' }
            };
        case CLEAR_ERRORS_SNACKBAR: 
            return {
                ...state,
                snackBarError: { state: false, message: '' },
            };
        case CLEAR_SUCCESS_SNACKBAR:
            return {
                ...state,
                snackBarSuccess: { state: false, message: '' },
            };
        case SET_ERROR_SNACKBAR:
            const error = action.err.code === 'auth/user-not-found'
                ? 'User not found, try to sing up'
                : action.err.message;
            return {
                ...state,
                snackBarError: { state: true, message: error },
            };
        case SET_COPYRIGHT: 
            return {
                ...state,
                copyRight: true
            };
        case CLEAR_COPYRIGHT:
            return {
                ...state,
                copyRight: false
            };
        default: return state;
    }
};

export default uiReducer;