import React from 'react';
import styles from'./Post.module.css'
import { addLikeActionCreator } from '../../../../state';

const Post = (props) => {
  let addLike = () => {
    props.dispatch(addLikeActionCreator(props));
  }
      
  return(
    <div className={styles.post}> 
      <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/>
      <p>{props.text}</p>
      <i onClick={addLike} className="far fa-heart"></i><span className={styles.likes}>{props.likes}</span>
    </div>
  )
}

export default Post;