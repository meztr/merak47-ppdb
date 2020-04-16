import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App/index';
import "./css/index.css";
import * as serviceWorker from './serviceWorker';

// SETTING UP REDUX STORE
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk";
// import reducer from './store/reducer';
import reducers from './store/reducers'


// ENHANCING STORE WITH FIREBASE
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "./services/firebase";
import config from './config';

// logrocket init
// import LogRocket from 'logrocket';

// if (process.env.NODE_ENV = 'production') {
//   LogRocket.init('ozkk6o/merak47-ppdb-prod-log');
//   console.log('LogRocket init');
// }

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore
);
const store = createStoreWithFirebase(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

// const store = createStore(reducer); // old reducer version

// const app = (
//     <Provider store={store}>
//         <BrowserRouter basename={config.basename}>
//             {/* basename="/datta-able" */}
//             <App />
//         </BrowserRouter>
//     </Provider>
// );

// ReactDOM.render(app, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
