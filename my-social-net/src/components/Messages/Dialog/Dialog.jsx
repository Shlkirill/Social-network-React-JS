import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
      <div className={styles.dialog}>
        <img src='https://www.meme-arsenal.com/memes/005754c81977199be7a2fb68c8f48107.jpg' className={styles.avatar}/>
        <div>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.message}>{props.text}</p>
        </div>
      </div>
    )
  }

export default Dialog;