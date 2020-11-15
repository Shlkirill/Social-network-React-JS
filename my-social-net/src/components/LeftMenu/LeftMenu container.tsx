import React from 'react';
import { connect } from 'react-redux';
import LeftMenu from './LeftMenu';
import { friendsType } from '../../redux/friendsReducer';

type PropsType = {
  friends: friendsType
}

class LeftMenuContainer extends React.Component<PropsType> {

  render() {
    return (
      <LeftMenu friends={this.props.friends} />
    )
  }

}


let mapStateToProps = (state: any) => {
  return {
    friends: state.friendsPage.friends,
  }
}

export default connect(mapStateToProps)(LeftMenuContainer);

