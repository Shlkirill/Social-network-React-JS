import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authorizationTC, outOfAccountTC, toogleIfFetchingAC } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authorization();
  }
  render() {
    return (<Header {...this.props.userInfo} outOfAccount={this.props.outOfAccount}/>)
  }
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.auth
  }
}
let mapDispatchToProps = {
  toogleIfFetching: toogleIfFetchingAC,
  authorization: authorizationTC,
  outOfAccount: outOfAccountTC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);