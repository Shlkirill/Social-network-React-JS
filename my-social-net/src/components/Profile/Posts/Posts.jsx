import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import FormAddNewText from '../../../universalBlocks/forms/AddNewText';

const Posts = (props) => {
  let result = props.postsData.map(item => <Post key={item.id} text={item.text} likes={item.likes} addLike={props.addLike} profile={props.profile} />);
debugger;
  return (
    <div className={styles.side}>
      <div className={styles.createPost}>
        <h3> My posts</h3>
        <FormAddNewText handleSubmit={props.handleSubmit} name={'newPost'} placeholder={'send new post'}/>
      </div>
      <div className={styles.posts}>
        {result}
      </div>
    </div>
  )
}

export default Posts;