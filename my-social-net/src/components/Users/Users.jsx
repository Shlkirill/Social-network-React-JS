import React from 'react';
import styles from './Users.module.css'
import User from './User/User';

const Users = (props) => {
    let userDate = props.users.map((item) => {
        return (item.followed == true) ? 
        <User name={item.fullName} id={item.id} status={item.status} location={item.location} avatar={item.avatar} followed='follow' toogleFollow={props.toogleFollow} /> : 
        <User name={item.fullName} id={item.id} status={item.status} location={item.location} avatar={item.avatar} followed='unfollow' toogleFollow={props.toogleFollow} />
    });

    let onSetUsers = () => {
        props.setUsers();
    }


    return (
        <div>
            <h3 className={styles.tittle}>Users</h3>
            {userDate}
            <button onClick={onSetUsers} className={styles.button}>Set users</button>
        </div>
    )
}

export default Users;