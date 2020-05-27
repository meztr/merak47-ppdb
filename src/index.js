import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App/index';
// import './css/index.css';
import * as serviceWorker from './serviceWorker';

import { Provider} from 'react-redux';
import configureStore from './store/store';
import config from './config';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const app = (
  <Provider store={configureStore}>
    <PersistGate loading={null} persistor={persistStore(configureStore)}>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
