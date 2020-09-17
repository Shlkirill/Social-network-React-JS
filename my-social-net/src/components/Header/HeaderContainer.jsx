import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserDataAC, toogleIfFetchingAC } from '../../redux/authReducer';
import { apiAuth } from '../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount() {
    let handler = (response) => {
      if (response.resultCode === 0) {
        this.props.setUserData(response.data)
      }
    };
    apiAuth().then(handler);
  }
  render() {
    return (<Header {...this.props.userInfo}/>)
  }
}


let mapStateToProps = (state) => {
  return {
    userInfo: state.auth
  }
}
let mapDispatchToProps = {
  setUserData: setUserDataAC,
  toogleIfFetching: toogleIfFetchingAC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);