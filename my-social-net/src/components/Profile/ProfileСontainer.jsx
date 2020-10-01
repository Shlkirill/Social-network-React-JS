import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { followingInProgressAC, followUserTC, getFollowUserTC, getUpdateSatusTC, getUserStatusTC, setFollowedUserAC, setProfileTC, setUserProfileAC, unFollowUserTC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11314;
    }
    this.props.setProfile(userId);
    this.props.getFollowUser(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return (<Profile profile={this.props.profile} followed={this.props.followed}
      setFollowedUser={this.props.setFollowedUser} isProgress={this.props.isProgress}
      followingInProgress={this.props.followingInProgress} followUser={this.props.followUser} 
      unFollowUser={this.props.unFollowUser} status={this.props.status} getUpdateSatus={this.props.getUpdateSatus}/>)
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    followed: state.profilePage.followed,
    isProgress: state.profilePage.followingInProgress,
    status: state.profilePage.status
  }
}
let mapDispatchToProps = {
  setUserProfile: setUserProfileAC,
  setFollowedUser: setFollowedUserAC,
  followingInProgress: followingInProgressAC,
  setProfile: setProfileTC,
  getFollowUser: getFollowUserTC,
  followUser: followUserTC,
  unFollowUser: unFollowUserTC,
  getUserStatus: getUserStatusTC,
  getUpdateSatus: getUpdateSatusTC,
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  )(ProfileContainer);