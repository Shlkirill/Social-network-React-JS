import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const SocialNetworkSite = () => {
  return (
    <BrowserRouter>
      <div className='SNsite'>
        <Header />
        <LeftMenu/>
        <Route path='/profile' component={Profile}/>
        <Route path='/messages'component={Messages}/>
        <Route path='/news'component={News}/>
        <Route path='/music'component={Music}/>
        <Route path='/settings'component={Settings}/>
      </div>
    </BrowserRouter>  
  );
}

export default SocialNetworkSite;
