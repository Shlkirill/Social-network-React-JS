import React from 'react';
import styles from './User.module.css'

const User = (props) => {
    let onToogleFollow = () => {
        props.toogleFollow(props.id, props.followed);
    }
    
    return (
        <div className={styles.user}>
            <div className={styles.user_logo}> 
                <img src={props.avatar} alt="" className={styles.avatar}/>
                <button onClick={onToogleFollow} className={styles.button}>{props.followed}</button>
            </div>
            <div className={styles.user_info}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.city}>{props.location.city+','}</p>
                <p className={styles.country}>{props.location.country}</p>
                <p className={styles.status}>{props.status}</p>
            </div>
        </div>
    )
}

export default User;