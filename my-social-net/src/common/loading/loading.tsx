import React from 'react';
import loadLogo from '../../img/load-final.gif'
import styles from './loading.module.css'

const Loading = () => {
    return (
        <img src={loadLogo} alt="" className={styles.loadLogo}/>
    )
}

export default Loading