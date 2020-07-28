import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  
  let postsData = [
    {id: 1, text: 'Hello! How are you?', likes: 3 },
    {id: 2, text: 'My name is Kirill!', likes: 8 }
  ]

  let result = postsData.map(item => <Post text={item.text} likes={item.likes}/>);

  return( 
    <div className={styles.side}>
      <div className={styles.createPost}>
        <h3> My posts</h3>
        <textarea className={styles.inputText} placeholder='How are you?'></textarea>
        <button className={styles.inputSubmit}>Send</button>
      </div>
      <div className={styles.posts}>
          {result}
      </div>
    </div>
  )
}

export default Posts;