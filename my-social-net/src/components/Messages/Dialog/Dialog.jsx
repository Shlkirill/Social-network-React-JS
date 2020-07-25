import React from 'react';
import styles from './Dialog.module.css';

function Dialog(props) {
    return (
      <div className={styles.dialog}>
        <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/>
        <div>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.message}>{props.text}</p>
        </div>
      </div>
    )
  }

export default Dialog;