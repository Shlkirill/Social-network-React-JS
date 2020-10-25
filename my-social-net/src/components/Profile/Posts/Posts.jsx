import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import FormAddNewText from '../../../universalBlocks/forms/AddNewText';
import { reduxForm } from 'redux-form';

const Posts = React.memo((props) => {

  const ContactForm = reduxForm({
    form: 'newPost'
  })(FormAddNewText);

  const onSubmit = (value) => {
    props.addPost(value.newPost)
  }

  let result = props.postsData.map(item => <Post key={item.id} text={item.text} likes={item.likes} addLike={props.addLike} profile={props.profile} />);
  console.log('RENDER POSTS')
  return (
    <div className={styles.side}>
      <div className={styles.createPost}>
        <h3> My posts</h3>
        <ContactForm onSubmit={onSubmit} name={'newPost'} placeholder={'send new post'} />
      </div>
      <div className={styles.posts}>  
        {result}
      </div>
    </div>
  )
}
)
export default Posts;