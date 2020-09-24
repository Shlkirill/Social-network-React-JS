import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirectComponent } from '../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/friendsReducer';
import { compose } from 'redux';

// const MessagesContainer = (props) => {
//   let state = props.store.getState();

//   let addMessage = (text,id) => {
//     props.store.dispatch(addMessageActionCreator(text,id));
// } 
//   return (
//   <Messages friendsPage={state.friendsPage} addMessage={addMessage}/>
//   )
// }


let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
  }
}

let mapDispatcherToProps = (dispatch) => {
  return {
    addMessage: (text, id) => { dispatch(addMessageActionCreator(text, id)) }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatcherToProps),
  withAuthRedirectComponent,
)(Messages);