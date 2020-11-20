import React from 'react';
import { connect } from 'react-redux';
import LeftMenu from './LeftMenu';
import { friendsType } from '../../redux/friendsReducer';
import { AppStateType } from '../../redux/reduxStore';

type PropsType = {
  friends: Array<friendsType>
}

class LeftMenuContainer extends React.Component<PropsType> {

  render() {
    return (
      <LeftMenu friends={this.props.friends} />
    )
  }

}


let mapStateToProps = (state: AppStateType) => {
  return {
    friends: state.friendsPage.friends,
  }
}
//@ts-ignore
export default connect(mapStateToProps)(LeftMenuContainer);

