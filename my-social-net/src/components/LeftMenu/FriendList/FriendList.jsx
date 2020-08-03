import React from 'react';
import styles from './FriendList.module.css'
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

const FriendList = (props) => {
   
  let friends = props.friends.map( (item) => {
    return <Friend avatar={item.avatar} name={item.name} />
  })
    
  return (
    <div className={styles.friendsList}>
      <p>Friend</p>
        <div className={styles.friendsWindow}>
          {friends}
        </div>
    </div>
  )
}
export default FriendList;