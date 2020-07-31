import React from 'react';
import styles from './FriendList.module.css'
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

const FriendList = () => {
  return (
    <div className={styles.friendsList}>
      <p>Friend</p>
        <div className={styles.friendsWindow}>
          
        </div>
    </div>
  )
}
export default FriendList;