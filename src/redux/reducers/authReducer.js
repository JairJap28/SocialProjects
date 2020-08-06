import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../types';

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    console.log(action);
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
            }
        default: return state;
    }
}

export default authReducer;