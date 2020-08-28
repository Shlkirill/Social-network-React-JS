import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import LeftMenuContainer from './components/LeftMenu/LeftMenu container';
import UsersContainer from './components/Users/UsersContainer';

const SocialNetworkSite = (props) => {
  return (
    <BrowserRouter>
      <div className='SNsite'>
        <Header />
        <LeftMenuContainer />
        <Route path='/profile'><Profile/></Route>
        <Route path='/messages'><MessagesContainer/></Route>
        <Route path='/news'><News/></Route>
        <Route path='/music'><Music/></Route>
        <Route path='/settings'><Settings/></Route>
        <Route path='/users'><UsersContainer /></Route>
      </div>
    </BrowserRouter>  
  );
}

export default SocialNetworkSite;
