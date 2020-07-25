import React from 'react';
import styles from './LeftMenu.module.css'
import { NavLink } from 'react-router-dom';

function LeftMenu() {
  return (
    <ul className={styles.menu}>
      <li><NavLink to='/profile'>Profile</NavLink></li>
      <li><NavLink to='/messages'>Messages</NavLink></li>
      <li><NavLink to='/news'>News</NavLink></li>
      <li><NavLink to='/music'>Music</NavLink></li>
      <li><NavLink to='/settings'>Settings</NavLink></li>
    </ul>
  )
}
export default LeftMenu;