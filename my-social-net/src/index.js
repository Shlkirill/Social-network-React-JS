import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkSite from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './state';


let rerenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <SocialNetworkSite state={state} addPost={store.addPost.bind(store)} addLike={store.addLike.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderAll(store.getState());
store.observer(rerenderAll);



serviceWorker.unregister();