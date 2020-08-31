import React from 'react';
import styles from './Users.module.css'
import User from './User/User';

const Users = (props) => {
    let userDate = props.users.map((item) => {
        return (item.followed == true) ? 
        <User name={item.fullName} key={item.id} id={item.id} status={item.status} location={item.location} avatar={item.avatar} followed='follow' toogleFollow={props.toogleFollow} /> : 
        <User name={item.fullName} key={item.id} id={item.id} status={item.status} location={item.location} avatar={item.avatar} followed='unfollow' toogleFollow={props.toogleFollow} />
    });

    let onSetUsers = () => {
        props.setUsers();
    }


    return (
        <div className={styles.users}>
            <h3 className={styles.tittle}>Users</h3>
            {userDate}
            <button onClick={onSetUsers} className={styles.button}><i className="fas fa-long-arrow-alt-down"></i>More users<i className="fas fa-long-arrow-alt-down"></i></button>
        </div>
    )
}

export default Users;