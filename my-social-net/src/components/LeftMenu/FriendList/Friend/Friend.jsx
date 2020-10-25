import React from 'react';
import styles from './Friend.module.css'
import { NavLink } from 'react-router-dom';

const Friend = (props) => { 
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={props.avatar}/>
      <p>{props.name}</p>
    </div>
  )
}
export default Friend;