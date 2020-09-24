import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { followingInProgressAC, followUserTC, getFollowUserTC, setFollowedUserAC, setProfileTC, setUserProfileAC, unFollowUserTC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirectComponent } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setProfile(userId);
    this.props.getFollowUser(userId);
  }
  render() {

    return (<Profile profile={this.props.profile} followed={this.props.followed}
      setFollowedUser={this.props.setFollowedUser} isProgress={this.props.isProgress}
      followingInProgress={this.props.followingInProgress} followUser={this.props.followUser} unFollowUser={this.props.unFollowUser} />)
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    followed: state.profilePage.followed,
    isProgress: state.profilePage.followingInProgress,
  }
}
let mapDispatchToProps = {
  setUserProfile: setUserProfileAC,
  setFollowedUser: setFollowedUserAC,
  followingInProgress: followingInProgressAC,
  setProfile: setProfileTC,
  getFollowUser: getFollowUserTC,
  followUser: followUserTC,
  unFollowUser: unFollowUserTC
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  )(ProfileContainer);