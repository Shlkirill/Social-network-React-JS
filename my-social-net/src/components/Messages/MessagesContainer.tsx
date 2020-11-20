import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirectComponent } from '../hoc/withAuthRedirect';
import { addMessageActionCreator, initialStateFriendsType } from '../../redux/friendsReducer';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';

type PropsType = {
  friendsPage: initialStateFriendsType,
  addMessage: () => void
}

const MessagesContainer: React.FC<PropsType> = (props) => {

  return (
  <Messages {...props}/>
  )
}

let mapStateToProps = (state:AppStateType) => {
  return {
    friendsPage: state.friendsPage,
  }
}

let mapDispatcherToProps =  {
    addMessage: addMessageActionCreator
}

export default compose(
  connect(mapStateToProps, mapDispatcherToProps),
  withAuthRedirectComponent,
)(MessagesContainer);