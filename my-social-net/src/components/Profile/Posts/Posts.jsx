import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

  let result = props.postsData.map(item => <Post text={item.text} likes={item.likes} addLike={props.addLike}/>);

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text);
    newPostElement.current.value = '';
  } 
  
  let newPostElement = React.createRef();

  return( 
    <div className={styles.side}>
      <div className={styles.createPost}>
        <h3> My posts</h3>
        <textarea ref={newPostElement} className={styles.inputText} placeholder='How are you?'></textarea>
        <button className={styles.inputSubmit} onClick = {addPost}>Send</button>
      </div>
      <div className={styles.posts}>
          {result}
      </div>
    </div>
  )
}

export default Posts;