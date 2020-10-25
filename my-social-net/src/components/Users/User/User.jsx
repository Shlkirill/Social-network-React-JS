import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css'
import { BottonToogleFollow } from '../../../universalBlocks/toogleFollow/BottonToggleFollow';


const User = (props) => {
    let onToogleFollow = () => {
        if (props.followed == false) {
            props.tooglefollowUser(props.id, props.followed);
            props.addFriend(props.id, props.avatar, props.name);
        } else {
            props.tooglefollowUser(props.id, props.followed);
        }
    }
    return (
        <div className={styles.user}>
            <div className={styles.user_logo}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.avatar} alt="" className={styles.avatar} />
                </NavLink>
                {BottonToogleFollow('ALL_USER', onToogleFollow, props.followed, props.isProgress, props.id)}
            </div>
            <div className={styles.user_info}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.status}>{props.status}</p>
            </div>
        </div>
    )
}

export default User;