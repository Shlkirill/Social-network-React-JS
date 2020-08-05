import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkSite from './App';
import * as serviceWorker from './serviceWorker';
import {state, addPost, addLike, observer} from './state';


let rerenderAll = () => {
  ReactDOM.render(
    <React.StrictMode>
      <SocialNetworkSite state={state} addPost={addPost} addLike={addLike}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderAll(state);
observer(rerenderAll);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();