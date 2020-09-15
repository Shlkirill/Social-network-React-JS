import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, addLikeActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

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