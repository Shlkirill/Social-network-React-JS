import React from 'react';
import styles from './DialogMe.module.css';

function DialogMe(props) {
    return (
      <div className={styles.dialog}>
        <div>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.message}>{props.text}</p>
        </div>
        <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/>
      </div>
    )
  }

export default DialogMe;