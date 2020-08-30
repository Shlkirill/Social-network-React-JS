import React from 'react';
import styles from './User.module';

const User = (props) => {
    let onToogleFollow = () => {
        props.toogleFollow(props.id, props.followed);
    }
    
    return (
        <div>
            <h3>{props.name}</h3>
            <button onClick={onToogleFollow}>{props.followed}</button>
        </div>
    )
}

export default User;