import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App/index';

// SETTING UP REDUX STORE
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from "redux-thunk";
import reducer from './store/reducer';


// ENHANCING STORE WITH FIREBASE
// import { reactReduxFirebase } from "react-redux-firebase";
// import firebase from "./services/firebase";
// const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
//   createStore
// );
// const store = createStoreWithFirebase(
//   reducers,
//   {},
//   applyMiddleware(reduxThunk)
// );


import * as serviceWorker from './serviceWorker';

import config from './config';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            {/* basename="/datta-able" */}
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
