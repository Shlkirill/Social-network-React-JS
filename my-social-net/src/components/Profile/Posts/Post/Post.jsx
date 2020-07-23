import React from 'react';
import styles from'./Post.module.css'

function Post(props) {
  return(
    <div className={styles.post}> 
      <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/>
      <p>{props.text}</p>
    </div>
  )
}

export default Post;