// SETTING UP REDUX STORE
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

// ENHANCING STORE WITH FIREBASE
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "../services/firebase";

const reduxFirebaseConfig = {
  userProfile: 'users',
  enableLogging: false
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, reduxFirebaseConfig)
)(createStore);

const configureStore = createStoreWithFirebase(
    rootReducer,
    {},
    compose(
      applyMiddleware(reduxThunk),
      typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default configureStore;