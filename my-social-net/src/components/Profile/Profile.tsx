import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import { profileType } from '../../redux/profileReducer';

export type PropsTypeProfileInfo = {
  profile: profileType,
  followed: boolean,
  isProgress: boolean,
  status: string
  authId: number,
  setFollowedUser: () => void,
  followingInProgress: () => void,
  getUpdateSatus: () => void,
  getUserStatus: (userId: number) => void,
  togglefollowUser: (userId:number, followed:boolean) => void,
  putAvatarToServer: (files: string) => void,
}

const Profile: React.FC<PropsTypeProfileInfo> = (props) => {
  return (
    <div className={styles.main}>
      <ProfileInfo  {...props} />
      <PostsContainer />
    </div>
  )
}

export default Profile;