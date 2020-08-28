import React from 'react';
import styles from './LeftMenu.module.css'
import { NavLink } from 'react-router-dom';
import FriendList from './FriendList/FriendList';


const LeftMenu = (props) => {
  return (
    <div className={styles.leftMenu}> 
      <ul className={styles.menu}>
        <li><NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></li>
        <li><NavLink to='/messages' activeClassName={styles.active}>Messages</NavLink></li>
        <li><NavLink to='/news' activeClassName={styles.active}>News</NavLink></li>
        <li><NavLink to='/music' activeClassName={styles.active}>Music</NavLink></li>
        <li><NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink></li>
        <li><NavLink to='/users' activeClassName={styles.active}>Find Users</NavLink></li>
      </ul>
      <FriendList friends={props.friends}/>
    </div>
  )
}
export default LeftMenu;
