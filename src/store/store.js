// SETTING UP REDUX STORE
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

// redux-persist
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// ENHANCING STORE WITH FIREBASE
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "../services/firebase";


const enhancers = []

if(process.env.NODE_ENV === 'development') {
  enhancers.push(typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
}

const reduxFirebaseConfig = {
  userProfile: 'users',
  enableLogging: false
}

let mustReducer = rootReducer

if(process.env.REACT_APP_PERSIST_STORE === "true") {
  console.log('persist true')
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer']
  }
  mustReducer = persistReducer(persistConfig, rootReducer)
}


const configureStore = createStore(
    mustReducer,
    {},
    compose(
      reactReduxFirebase(firebase, reduxFirebaseConfig),
      applyMiddleware(reduxThunk),
      ...enhancers,
    )
);

// persistStore(configureStore)

export default configureStore;