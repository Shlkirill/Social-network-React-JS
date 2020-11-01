import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { followingInProgressAC, getFollowUserTC, getUpdateSatusTC, getUserStatusTC, putAvatarToServerTC, setFollowedUserAC, setProfileTC, setUserProfileAC, togglefollowUserTC} from '../../redux/profileReducer';
import { withRouter} from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../hoc/withAuthRedirect';

const ProfileContainer = (props) => {
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
    putAvatarToServer={props.putAvatarToServer}/>
    )
}



// class ProfileContainer extends React.Component {

//   componentDidMount() {
//     let userId = this.props.match.params.userId;
//     if (!userId) {
//       userId = this.props.authId;
//     }
//     this.props.setProfile(userId);
//     this.props.getFollowUser(userId);
//     this.props.getUserStatus(userId);
//   }
//   render() {
//     return (<Profile profile={this.props.profile} followed={this.props.followed}
//       setFollowedUser={this.props.setFollowedUser} isProgress={this.props.isProgress}
//       followingInProgress={this.props.followingInProgress} followUser={this.props.followUser}
//       unFollowUser={this.props.unFollowUser} status={this.props.status}
//       getUpdateSatus={this.props.getUpdateSatus} getUserStatus={this.props.getUserStatus}
//       authId={this.props.authId} />)
//   }
// }


let mapStateToProps = (state) => {
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