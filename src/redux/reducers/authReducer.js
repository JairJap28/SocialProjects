import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNOUT_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_ERROR
} from '../types';

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            const error = action.err.code === 'auth/user-not-found'
                ? 'User not found, try to sing up'
                : action.err.message;
            return {
                ...state,
                authError: error
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                authError: action.err.message
            }
        case SIGNOUT_SUCCESS:
            return state;
        case RESET_PASSWORD_ERROR: {
            return state;
        }
        default: return state;
    }
}

export default authReducer;