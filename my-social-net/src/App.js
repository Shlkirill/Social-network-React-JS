import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';

const SocialNetworkSite = (props) => {
  return (
    <BrowserRouter>
      <div className='SNsite'>
        <Header />
        <LeftMenu store={props.store}/>
        <Route path='/profile'><Profile store={props.store}/></Route>
        <Route path='/messages'><MessagesContainer store={props.store}/></Route>
        <Route path='/news'><News/></Route>
        <Route path='/music'><Music/></Route>
        <Route path='/settings'><Settings/></Route>
      </div>
    </BrowserRouter>  
  );
}

export default SocialNetworkSite;
