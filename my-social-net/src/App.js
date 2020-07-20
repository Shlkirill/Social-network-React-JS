import React from 'react';
import logo from './logo.svg';
import './App.css';

function SocialNetworkSite() {
  return (
    <div className='SNsite'>
      <Header />
      <LeftMenu />
    </div>
  );
}


function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src='http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png'/>
      </div>
      <div className='header__button'>
        <button>Выход</button>
      </div>
    </div>
  )
}

function LeftMenu() {
  return (
    <ul className='menu'>
      <li>Profile</li>
      <li>Messages</li>
      <li>News</li>
      <li>Music</li>
      <li>Settings</li>
    </ul>
  )
}
export default SocialNetworkSite;
