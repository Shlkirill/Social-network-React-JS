import React from 'react';
import styles from './Users.module';
import User from './User/User';

const Users = (props) => {
    let userDate = props.users.map((item)=> {
        if (item.followed == true) {
            return <User name={item.fullName} id={item.id} status={item.status} location={item.location} avatar={item.avatar} followed='follow' toogleFollow={props.toogleFollow}/>
        } else {
            return <User name={item.fullName} id={item.id} status={item.status} location={item.location} avatar={item.avatar} followed='unfollow' toogleFollow={props.toogleFollow}/>
        }
    });
    
    return (
        <div>
            {userDate}
        </div>
    )
}

export default Users;