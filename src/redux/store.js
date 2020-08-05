// Redux
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
    reduxFirestore,
    getFirestore,
    firestoreReducer,
    createFirestoreInstance
} from 'redux-firestore';
import {
    getFirebase
} from 'react-redux-firebase';

// Reducers
import authReducer from './reducers/authReducer';
import projectReducer from './reducers/projectReducer';

// Firebase
import fbConfig from '../config/fbConfig';
import firebase from 'firebase/app';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export const rrfProps = {
    firebase: firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

export default store;