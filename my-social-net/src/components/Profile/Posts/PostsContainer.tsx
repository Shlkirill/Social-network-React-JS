import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, addLikeActionCreator, profileType, postType } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/reduxStore';

export type PropsTypePosts = {
  postsData: postType[]
  profile: profileType,
  addPost: (newPost: string) => void,
  addLike: () => void,
}

const PostsContainer: React.FC<PropsTypePosts> = (props) => {

  return (
    <Posts {...props} />
  )
}

let mapStateToProps = (state: AppStateType) => {
  return {
    postsData: state.profilePage.posts,
    profile: state.profilePage.profile
  }
}
let mapDispatchToProps = {
  addPost: addPostActionCreator,
  addLike: addLikeActionCreator,
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);