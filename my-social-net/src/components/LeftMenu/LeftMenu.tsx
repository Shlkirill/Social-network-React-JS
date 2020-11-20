import React from 'react';
import styles from './LeftMenu.module.css'
import { NavLink } from 'react-router-dom';
import FriendList from './FriendList/FriendList';
//@ts-ignore
import logo from '../../img/logo2.PNG';
import { friendsType } from '../../redux/friendsReducer';

type PorpsType = {
  friends: Array<friendsType>
}

const LeftMenu: React.FC<PorpsType> = ({friends}) => {
  return (
    <div className={styles.leftMenu}>
      <div className={styles.logo}>
        <img src={logo} alt=""/>
      </div>
      <ul className={styles.menu}>
        <li><NavLink to='/profile' activeClassName={styles.active}>
          <i className="far fa-user-circle"></i>
          <span>Profile</span>
        </NavLink></li>
        <li><NavLink to='/messages' activeClassName={styles.active}>
          <i className="far fa-comments"></i>
          <span>Messages</span>
        </NavLink></li>
        <li><NavLink to='/news' activeClassName={styles.active}>
          <i className="far fa-newspaper"></i>
          <span>News</span>
        </NavLink></li>
        <li><NavLink to='/music' activeClassName={styles.active}>
          <i className="far fa-play-circle"></i>
          <span>Music</span>
        </NavLink></li>
        <li><NavLink to='/settings' activeClassName={styles.active}>
          <i className="fas fa-cogs"></i>
          <span>Settings</span>
        </NavLink></li>
        <li><NavLink to='/users' activeClassName={styles.active}>
          <i className="fas fa-users"></i>
          <span>Find Users</span>
        </NavLink></li>
      </ul>
      <FriendList friends={friends} />
    </div>
  )
}
export default LeftMenu;
