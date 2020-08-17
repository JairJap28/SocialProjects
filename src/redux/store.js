// Redux
import {
    createStore,
    applyMiddleware
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
    firebaseReducer,
    getFirebase
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import authReducer from './reducers/authReducer';
import projectReducer from './reducers/projectReducer';
import uiReducer from './reducers/uiReducer';

// Firebase
import fbConfig from '../config/fbConfig';
import firebase from 'firebase/app';

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, fbConfig)
    )
);

const configProfile = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

export const rrfProps = {
    firebase: firebase,
    config: configProfile,
    dispatch: store.dispatch,
    createFirestoreInstance
};

export default store;