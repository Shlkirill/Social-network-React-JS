import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css'
import { BottonToggleFollow } from '../../../universalBlocks/toggleFollow/BottonToggleFollow';


const User = (props) => {
    let onToggleFollow = () => {
        props.togglefollowUser(props.id, props.followed);
    }
    return (
        <div className={styles.user}>
            <div className={styles.user_logo}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.avatar} alt="" className={styles.avatar} />
                </NavLink>
                {BottonToggleFollow('ALL_USER', onToggleFollow, props.followed, props.isProgress, props.id)}
            </div>
            <div className={styles.user_info}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.status}>{props.status}</p>
            </div>
        </div>
    )
}

export default User;