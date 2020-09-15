import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css'

const User = (props) => {
    let onToogleFollow = (e) => {
        props.toogleFollow(props.id, props.followed);
    }

    return (
        <div className={styles.user}>
            <div className={styles.user_logo}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.avatar} alt="" className={styles.avatar} />
                </NavLink>
                <button onClick={onToogleFollow} className={styles.button}>{props.followed}</button>
            </div>
            <div className={styles.user_info}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.status}>{props.status}</p>
            </div>
        </div>
    )
}

export default User;