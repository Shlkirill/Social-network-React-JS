import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css'
import { apiFollowUser, apiUnfollowUser} from '../../../api/api';

const User = (props) => {
    let onToogleFollow = () => {
        props.toogleFollow(props.id, props.followed);
        if (props.followed == false) {
            apiFollowUser(props.id);
            props.addFriend(props.id, props.avatar, props.name);
        } else {
            apiUnfollowUser(props.id);
        }
    }
    return (
        <div className={styles.user}>
            <div className={styles.user_logo}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.avatar} alt="" className={styles.avatar} />
                </NavLink>
                {props.followed == true ? <button onClick={onToogleFollow} className={styles.buttonUnfollow}>unfollow</button> :
                    <button onClick={onToogleFollow} className={styles.buttonFollow}>follow</button>}
            </div>
            <div className={styles.user_info}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.status}>{props.status}</p>
            </div>
        </div>
    )
}

export default User;