import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
  
const Profile = (props) => {
  console.log('RENDER PROFILE')
  return(
    <div className={styles.main}>
      <ProfileInfo  profile={props.profile} followed={props.followed} 
                    setFollowedUser={props.setFollowedUser} isProgress={props.isProgress} 
                    followingInProgress={props.followingInProgress} followUser={props.followUser} 
                    unFollowUser={props.unFollowUser} status={props.status} 
                    getUpdateSatus={props.getUpdateSatus} getUserStatus={props.getUserStatus}
                    authId={props.authId}/>
      <PostsContainer/>
    </div>
  )
}

export default Profile;