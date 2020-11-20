import React from 'react';
import styles from './DialogMe.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  name: string,
  text: string,
}

const DialogMe: React.FC<PropsType> = ({name, text}) => {
    return (
      <div className={styles.dialog}>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.message}>{text}</p>
        </div>
        <NavLink to='/profile'><img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/></NavLink>
      </div>
    )
  }

export default DialogMe;