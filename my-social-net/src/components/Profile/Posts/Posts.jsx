import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

function Posts() {
  return( 
    <div className={styles.side}>
      <div className={styles.createPost}>
        <h3> My posts</h3>
        <input type='text' className={styles.inputText}/>
        <input type='submit' className={styles.inputSubmit}/>
      </div>
      <div className={styles.posts}>
          <Post text='Hello! How are you?' likes='3'/>
          <Post text='My name is Kirill!' likes='9'/>
      </div>
    </div>
  )
}

export default Posts;