import React from 'react';
import styles from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
  
const Profile = (props) => {
  debugger;
  return(
    <div className={styles.main}>
      <ProfileInfo />
      <PostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;