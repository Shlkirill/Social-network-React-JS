import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfileAC } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let serverRequest = axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`);
        let handler = (response) => {
          this.props.setUserProfile(response.data)
        };
        serverRequest.then(handler);
    }
    render() {
        return (<Profile {...this.props.profile}/>)
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);