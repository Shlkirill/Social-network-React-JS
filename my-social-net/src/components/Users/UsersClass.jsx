import React from 'react';
import styles from './Users.module.css'
import User from './User/User';
import axios from 'axios';
import photoDefault from '../../img/empty-avatar.png'


const Users = (props) => {
    if (props.users.length === 0) {

        let serverRequest = axios.get('https://social-network.samuraijs.com/api/1.0/users?page=8');

        let handler = (response) => {
            props.setUsers(response.data.items);
        };
        serverRequest.then(handler);
    }
    let userDate = props.users.map((item) => {
        return (item.followed == true) ?
            <User name={item.name} key={item.id} id={item.id} followed='follow' avatar={item.photos.small || photoDefault} status={item.status} toogleFollow={props.toogleFollow} /> :
            <User name={item.name} key={item.id} id={item.id} followed='unfollow' avatar={item.photos.small || photoDefault} status={item.status} toogleFollow={props.toogleFollow} />
    });

    return (
        <div className={styles.users}>
            <h3 className={styles.tittle}>Users</h3>
            {userDate}
            <button onClick={console.log('qfs')} className={styles.button}><i className="fas fa-long-arrow-alt-down"></i>More users<i className="fas fa-long-arrow-alt-down"></i></button>
        </div>
    )
}

export default Users;