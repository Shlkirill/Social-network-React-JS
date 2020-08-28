import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator } from '../../redux/friendsReducer';
import { connect } from 'react-redux';

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
    addMessage: (text,id) => {dispatch(addMessageActionCreator(text,id))}
  }
}


const MessagesContainer = connect(mapStateToProps,mapDispatcherToProps)(Messages);

export default MessagesContainer;