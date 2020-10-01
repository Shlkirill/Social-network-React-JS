import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, addLikeActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


const PostsContainer = (props) => {
  
  return(
    <Posts {...props}/>
  )
}



let mapStateToProps = (state) => {
  return{
    postsData: state.profilePage.posts,
    profile: state.profilePage.profile
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {dispatch(addPostActionCreator(text))},
    addLike: (postLike) => {dispatch(addLikeActionCreator(postLike))},
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);