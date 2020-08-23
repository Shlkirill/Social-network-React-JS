import React from 'react';
import styles from './LeftMenu.module.css'
import { NavLink } from 'react-router-dom';
import FriendList from './FriendList/FriendList';


const LeftMenu = (props) => {
  let state = props.store.getState();
  return (
    <div className={styles.leftMenu}> 
      <ul className={styles.menu}>
        <li><NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></li>
        <li><NavLink to='/messages' activeClassName={styles.active}>Messages</NavLink></li>
        <li><NavLink to='/news' activeClassName={styles.active}>News</NavLink></li>
        <li><NavLink to='/music' activeClassName={styles.active}>Music</NavLink></li>
        <li><NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink></li>
      </ul>
      <FriendList friends={state.friendsPage.friends}/>
    </div>
  )
}
export default LeftMenu;