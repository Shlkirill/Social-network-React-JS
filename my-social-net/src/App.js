import React from 'react';
import logo from './logo.svg';
import './App.css';

function SocialNetworkSite() {
  return (
    <div className='SNsite'>
      <Header />
      <LeftMenu />
      <MainBlock />
    </div>
  );
}


function Header() {
  return (
    <div className='header'>
        <img src='http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png' className='header__logo'/>
        <p>SOCIAL CITE</p>
        <button className='header__button'>Выход</button>
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

function MainBlock() {
  return(
    <div className='main'>
      <img src='http://dgdesign.ru/uploads/posts/2018-05/1525700405_shapka-sayta-tehnologii-2114654127851.jpg' className='main__topImg' />
      <div className='user'>
          <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className='user__avatar'/>
        <div className='user__info'>
          <h4>Kirill S.H</h4>
          <p><span>Date of Birth: </span>12.08.1994 g.</p>
          <p><span>City: </span>Belogorod</p>
          <p><span>Education: </span>Belgorod economic university</p>
          <p><span>tel.: </span>8-800-555-35-35</p>
        </div>
      </div>  
        <div className='side'>
          <div className='side__newMessage'>
            <h3> My posts</h3>
            <input type='text' className='side__text'/>
            <input type='submit' className='side__submit'/>
          </div>
          <div className='side__allMessages'>
              <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className='side__avatar'/>
              <p>Hello all! How are you?</p>
          </div>
        </div>
    </div>
  )
}
export default SocialNetworkSite;
