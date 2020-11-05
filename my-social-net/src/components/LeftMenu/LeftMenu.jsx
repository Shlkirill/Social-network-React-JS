import React from 'react';
import styles from './LeftMenu.module.css'
import { NavLink } from 'react-router-dom';
import FriendList from './FriendList/FriendList';


const LeftMenu = (props) => {
  return (
    <div className={styles.leftMenu}> 
      <ul className={styles.menu}>
        <li><NavLink to='/profile' activeClassName={styles.active}><i class="far fa-user-circle"></i>Profile</NavLink></li>
        <li><NavLink to='/messages' activeClassName={styles.active}><i class="far fa-comments"></i>Messages</NavLink></li>
        <li><NavLink to='/news' activeClassName={styles.active}><i class="far fa-newspaper"></i>News</NavLink></li>
        <li><NavLink to='/music' activeClassName={styles.active}><i class="far fa-play-circle"></i>Music</NavLink></li>
        <li><NavLink to='/settings' activeClassName={styles.active}><i class="fas fa-cogs"></i>Settings</NavLink></li>
        <li><NavLink to='/users' activeClassName={styles.active}><i class="fas fa-users"></i>Find Users</NavLink></li>
      </ul>
      <FriendList friends={props.friends}/>
    </div>
  )
}
export default LeftMenu;
