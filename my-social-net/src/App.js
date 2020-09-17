import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import LeftMenuContainer from './components/LeftMenu/LeftMenu container';
import UsersContainer from './components/Users/UsersContainer';
import ProfileСontainer from './components/Profile/ProfileСontainer';
import HeaderContainer from './components/Header/HeaderContainer';

const SocialNetworkSite = (props) => {
  return (
    <BrowserRouter>
      <div className='SNsite'>
        <HeaderContainer />
        <LeftMenuContainer />
        <Route path='/profile/:userId?'><ProfileСontainer/></Route>
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
