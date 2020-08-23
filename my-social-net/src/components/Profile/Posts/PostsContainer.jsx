import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, addLikeActionCreator } from '../../../profileReducer';


const PostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = (text) => {
    props.store.dispatch(addPostActionCreator(text));
  } 
  let addLike = (postLike) => {
    props.store.dispatch(addLikeActionCreator(postLike));
  }

  return (
  <Posts postsData = {state.profilePage.posts} addPost={addPost} addLike={addLike} />
  )
}


// const Posts = (props) => {
//   console.log(props);

//   let result = props.postsData.map(item => <Post text={item.text} likes={item.likes} dispatch={props.dispatch}/>);

//   let addPost = () => {
//     let text = newPostElement.current.value
//     props.dispatch(addPostActionCreator(text));
//     newPostElement.current.value = '';
//   } 
  
//   let newPostElement = React.createRef();

//   return( 
//     <div className={styles.side}>
//       <div className={styles.createPost}>
//         <h3> My posts</h3>
//         <textarea ref={newPostElement} className={styles.inputText} placeholder='How are you?'></textarea>
//         <button className={styles.inputSubmit} onClick = {addPost}>Send</button>
//       </div>
//       <div className={styles.posts}>
//           {result}
//       </div>
//     </div>
//   )
// }

export default PostsContainer;