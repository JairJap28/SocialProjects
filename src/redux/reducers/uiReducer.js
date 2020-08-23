import {
    OPEN,
    CLEAR_UI,
    CLEAR_SNACKBAR,
    CLEAR_COPYRIGHT,
    SET_ERROR_SNACKBAR,
    SET_SUCCESS_SNACKBAR,
    SET_COPYRIGHT
} from '../types';

const initialState = {
    copyRight: false,
    open: false,
    error: '',
    snackBar: {
        state: false, 
        message: false,
        type: 'info'
    },
};

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_UI: 
            return {
                open: false,
                snackBar: { state: false, message: '', type: 'info' },
            };
        case CLEAR_SNACKBAR: 
            return {
                ...state,
                snackBar: { state: false, message: '', type: 'info' },
            };
        case SET_SUCCESS_SNACKBAR: 
            return {
                ...state,
                snackBar: { state: true, message: action.message, type: 'success' },
            };
        case SET_ERROR_SNACKBAR:
            const error = action.err.code === 'auth/user-not-found'
                ? 'User not found, try to sing up'
                : action.err.message;
            return {
                ...state,
                error,
                snackBar: { state: true, message: error, type: 'error' },
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
        case OPEN:
            return {
                ...state,
                open: true
            };
        default: return state;
    }
};

export default uiReducer;