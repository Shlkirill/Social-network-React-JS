import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutAccountTC } from '../../redux/authReducer';

type PropsType = {
  logoutAccount: () => void
}

class HeaderContainer extends React.Component<PropsType> {

  render() {
    return (<Header logoutAccount={this.props.logoutAccount} />)
  }
}

let mapStateToProps = (state: any) => {
  return {

  }
}

let mapDispatchToProps = {
  logoutAccount: logoutAccountTC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);