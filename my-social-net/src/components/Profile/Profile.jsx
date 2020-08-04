import React from 'react';
import styles from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
  
const Profile = (props) => {
  return(
    <div className={styles.main}>
      <ProfileInfo />
      <Posts postsData = {props.profilePage.posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;