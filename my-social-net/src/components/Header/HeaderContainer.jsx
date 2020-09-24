import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authorizationTC, toogleIfFetchingAC } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authorization();
  }
  render() {
    return (<Header {...this.props.userInfo} />)
  }
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.auth
  }
}
let mapDispatchToProps = {
  toogleIfFetching: toogleIfFetchingAC,
  authorization: authorizationTC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);