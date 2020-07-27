import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  let postsData = [
    {id: 1, text: 'Hello! How are you?', likes: 3 },
    {id: 2, text: 'My name is Kirill!', likes: 8 }
  ]



  return( 
    <div className={styles.side}>
      <div className={styles.createPost}>
        <h3> My posts</h3>
        <input type='text' className={styles.inputText}/>
        <input type='submit' className={styles.inputSubmit}/>
      </div>
      <div className={styles.posts}>
          <Post text={postsData[0].text} likes={postsData[0].likes}/>
          <Post text={postsData[1].text} likes={postsData[1].likes}/>
      </div>
    </div>
  )
}

export default Posts;