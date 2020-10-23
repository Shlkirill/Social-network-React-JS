import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkSite from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SocialNetworkSite store={store} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));


serviceWorker.unregister();