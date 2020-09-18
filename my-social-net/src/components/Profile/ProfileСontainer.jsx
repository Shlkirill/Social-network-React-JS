import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setFollowedUserAC, setUserProfileAC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { apiGetFollowUser, apiSetProfile } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
          userId=2;
        }
        let handler = (response) => {
          this.props.setUserProfile(response)
        };
        apiSetProfile(userId).then(handler)

        apiGetFollowUser(userId).then((responce) => {
          this.props.setFollowedUser(responce);
        })
    }
    render() {
        return (<Profile profile={this.props.profile} followed={this.props.followed} setFollowedUser={this.props.setFollowedUser}/>)
    }
}



let mapStateToProps = (state) => {
    return {
      profile: state.profilePage.profile,
      followed: state.profilePage.followed
    }
}
let mapDispatchToProps = {
  setUserProfile:setUserProfileAC,
  setFollowedUser: setFollowedUserAC,

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));