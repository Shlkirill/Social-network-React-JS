import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authorizationTC, logoutAccountTC, toogleIfFetchingAC } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  render() {
    return (<Header {...this.props.userInfo} logoutAccount={this.props.logoutAccount}/>)
  }
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.auth
  }
}
let mapDispatchToProps = {
  toogleIfFetching: toogleIfFetchingAC,
  logoutAccount: logoutAccountTC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);