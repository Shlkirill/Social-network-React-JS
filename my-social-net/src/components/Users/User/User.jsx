import React from 'react';
import styles from './User.module';

const User = (props) => {
    debugger;
    let follow = () => {
        props.follow(props.followed, props.id);
    }
    
    return (
        <div>
            <h3>{props.name}</h3>
            <button onClick={follow}>{props.followed}</button>
        </div>
    )
}

export default User;