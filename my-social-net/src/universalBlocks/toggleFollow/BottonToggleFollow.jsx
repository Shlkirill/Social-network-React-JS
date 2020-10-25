import React from 'react';
import styles from './Botton.module.css'

export const BottonToggleFollow = (initial, action, followed, arr, id) => {
    let result;
    if (initial == "ONE_USER") {
        result = arr;

    } else if (initial == "ALL_USER") {
        result = arr.some((item) => {
            return item == id;
        })
    }
    return followed == true ? <button onClick={action} className={result ? styles.disable : styles.buttonUnfollow} disabled={result}>{result ? 'wait...' : 'unfollow'}</button> :
        <button onClick={action} className={result ? styles.disable : styles.buttonFollow} disabled={result}>{result ? 'wait...' : 'follow'}</button>
}