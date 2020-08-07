import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNOUT_SUCCESS
} from '../types';

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_ERROR:
            const error = action.err.code === 'auth/user-not-found'
                ? 'User not found, try to sing up'
                : action.err.message;
            return {
                ...state,
                authError: error
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                authError: null
            };
        case SIGNOUT_SUCCESS:
            return state;
        default: return state;
    }
}

export default authReducer;