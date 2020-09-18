import React from 'react';
import Loading from '../../../../universalBlocks/loading/loading';
import photoDefault from '../../../../img/empty-avatar.png'
import styles from'./Post.module.css'

const Post = (props) => {
  let onAddLike = () => {
    let postLike = props;
    props.addLike(postLike);
  }
  if (!props.profile) {
    return <Loading />
  }    
  return(
    <div className={styles.post}> 
      <img src={props.profile.photos.small||photoDefault} className={styles.avatar}/>
      <p>{props.text}</p>
      <i onClick={onAddLike} className="far fa-heart"></i><span className={styles.likes}>{props.likes}</span>
    </div>
  )
}

export default Post;