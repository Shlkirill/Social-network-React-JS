import React from 'react';
import styles from './Dialog.module.css';

type PropsType = {
  img: string,
  name: string,
  text: string,
}

const Dialog: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.dialog}>
      <img src={props.img} className={styles.avatar} />
      <div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.message}>{props.text}</p>
      </div>
    </div>
  )
}

export default Dialog;