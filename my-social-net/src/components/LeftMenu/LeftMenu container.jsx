import React from 'react';
import { connect } from 'react-redux';
import LeftMenu from './LeftMenu';



class LeftMenuContainer extends React.Component {

  render() {
    return (
      <LeftMenu friends={this.props.friends} />
    )
  }

}


let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
  }
}

export default connect(mapStateToProps)(LeftMenuContainer);

