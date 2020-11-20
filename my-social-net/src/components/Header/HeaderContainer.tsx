import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutAccountTC } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';

type PropsType = {
  logoutAccount: () => void
}

class HeaderContainer extends React.Component<PropsType> {

  render() {
    return (<Header logoutAccount={this.props.logoutAccount} />)
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {

  }
}

let mapDispatchToProps = {
  logoutAccount: logoutAccountTC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);