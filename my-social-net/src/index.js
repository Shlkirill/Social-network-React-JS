import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkSite from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';



let rerenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <SocialNetworkSite store = {store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderAll(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderAll(state);
});


serviceWorker.unregister();