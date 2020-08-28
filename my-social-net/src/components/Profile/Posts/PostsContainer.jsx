import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, addLikeActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


// const PostsContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = (text) => {
//     props.store.dispatch(addPostActionCreator(text));
//   } 
//   let addLike = (postLike) => {
//     props.store.dispatch(addLikeActionCreator(postLike));
//   }

//   return (
//   <Posts postsData = {state.profilePage.posts} addPost={addPost} addLike={addLike} />
//   )
// }


let mapStateToProps = (state) => {
  return{
    postsData: state.profilePage.posts,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {dispatch(addPostActionCreator(text))},
    addLike: (postLike) => {dispatch(addLikeActionCreator(postLike))},
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


export default PostsContainer;