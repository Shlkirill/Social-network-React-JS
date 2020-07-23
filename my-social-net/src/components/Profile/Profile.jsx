import React from 'react';
import styles from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Profile() {
  return(
    <div className={styles.main}>
      <ProfileInfo />
      <Posts />
    </div>
  )
}

export default Profile;