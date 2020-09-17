import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfileAC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { apiSetProfile } from '../../api/api';

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
    }
    render() {
        return (<Profile profile={this.props.profile}/>)
    }
}



let mapStateToProps = (state) => {
    return {
      profile: state.profilePage.profile
    }
}
let mapDispatchToProps = {
  setUserProfile:setUserProfileAC,

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));