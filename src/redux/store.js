// Redux
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import authReducer from './reducers/authReducer';
import projectReducer from './reducers/projectReducer';

const initialState = {};

const middleWare = [thunk];

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;