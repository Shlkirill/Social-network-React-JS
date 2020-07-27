import React from 'react';
import styles from './DialogMe.module.css';
import { NavLink } from 'react-router-dom';

const DialogMe = (props) => {
    return (
      <div className={styles.dialog}>
        <div>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.message}>{props.text}</p>
        </div>
        <NavLink to='/profile'><img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/></NavLink>
      </div>
    )
  }

export default DialogMe;