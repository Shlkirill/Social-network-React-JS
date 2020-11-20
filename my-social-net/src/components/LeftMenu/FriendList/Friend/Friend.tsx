import React from 'react';
import styles from './Friend.module.css'

type PropsType = {
  avatar: string,
  name: string
}

const Friend: React.FC<PropsType> = ({ avatar, name }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} />
      <p>{name}</p>
    </div>
  )
}
export default Friend;