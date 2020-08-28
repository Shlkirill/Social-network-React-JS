import React from 'react';
import styles from './Users.module';
import User from './User/User';

const Users = (props) => {
    let userDate = props.users.map((item)=> {
        if (item.followed == true) {
            return <User name={item.fullName} followed='follow' follow={props.follow} id={item.id}/>
        } else {
            return <User name={item.fullName} followed='unfollow' follow={props.follow} id={item.id}/>
        }
    });
    
    return (
        <div>
            {userDate}
        </div>
    )
}

export default Users;