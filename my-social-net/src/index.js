import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkSite from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';



let rerenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <SocialNetworkSite store={store} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderAll(store.getState());
store.subscribe(() => {
  console.log(store);
  let state = store.getState();
  rerenderAll(state);
});


serviceWorker.unregister();