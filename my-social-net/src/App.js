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

const SocialNetworkSite = (props) => {

  return (
    <BrowserRouter>
      <div className='SNsite'>
        <Header />
        <LeftMenu friendsPage={props.state.friendsPage}/>
        <Route path='/profile'><Profile profilePage={props.state.profilePage} addPost={props.addPost} addLike={props.addLike}/></Route>
        <Route path='/messages'><Messages friendsPage={props.state.friendsPage}/></Route>
        <Route path='/news'><News/></Route>
        <Route path='/music'><Music/></Route>
        <Route path='/settings'><Settings/></Route>
      </div>
    </BrowserRouter>  
  );
}

export default SocialNetworkSite;
