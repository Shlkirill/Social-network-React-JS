import React from 'react';
import styles from './Botton.module.css'

export const BottonToogleFollow = (followed, action) => {
    return followed == true ? <button onClick={action} className={styles.buttonUnfollow}>unfollow</button>:
    <button onClick={action} className={styles.buttonFollow}>follow</button>
}