import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { followingInProgressAC, getFollowUserTC, getUpdateSatusTC, getUserStatusTC, profileType, putAvatarToServerTC, setFollowedUserAC, setProfileTC, setUserProfileAC, togglefollowUserTC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/reduxStore';

type PropsTypeProfile = {
  profile: profileType,
  followed: boolean,
  isProgress: boolean,
  status: string,
  authId: number,
  setProfile: (userId: number) => void;
  getFollowUser: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  setUserProfile: () => void,
  setFollowedUser: () => void,
  followingInProgress: () => void,
  getUpdateSatus: () => void,
  togglefollowUser: () => void,
  putAvatarToServer: () => void,
  match: any
}

const ProfileContainer: React.FC<PropsTypeProfile> = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.authId;
    }
    props.setProfile(userId);
    props.getFollowUser(userId);
    props.getUserStatus(userId);
  }, [props.match.params.userId])

  return (<Profile profile={props.profile} followed={props.followed}
    setFollowedUser={props.setFollowedUser} isProgress={props.isProgress}
    followingInProgress={props.followingInProgress} status={props.status}
    getUpdateSatus={props.getUpdateSatus} getUserStatus={props.getUserStatus}
    authId={props.authId} togglefollowUser={props.togglefollowUser}
    putAvatarToServer={props.putAvatarToServer} />
  )
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    followed: state.profilePage.followed,
    isProgress: state.profilePage.followingInProgress,
    status: state.profilePage.status,
    authId: state.auth.id
  }
}
let mapDispatchToProps = {
  setUserProfile: setUserProfileAC,
  setFollowedUser: setFollowedUserAC,
  followingInProgress: followingInProgressAC,
  setProfile: setProfileTC,
  getFollowUser: getFollowUserTC,
  getUserStatus: getUserStatusTC,
  getUpdateSatus: getUpdateSatusTC,
  togglefollowUser: togglefollowUserTC,
  putAvatarToServer: putAvatarToServerTC
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent,
  withRouter,
)(ProfileContainer);