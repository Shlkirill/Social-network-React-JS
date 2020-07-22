import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu';
import Profile from './components/Profile/Profile';

function SocialNetworkSite() {
  return (
    <div className='SNsite'>
      <Header />
      <LeftMenu/>
      <Profile />
    </div>
  );
}

export default SocialNetworkSite;
