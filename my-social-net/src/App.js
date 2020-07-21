import React from 'react';
import './App.css';
import Header from './components/Header'
import LeftMenu from './components/LeftMenu';
import Profile from './components/Profile';

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
