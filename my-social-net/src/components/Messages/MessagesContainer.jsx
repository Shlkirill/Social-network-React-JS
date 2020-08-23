import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator } from '../../friendsReducer';

const MessagesContainer = (props) => {
  let state = props.store.getState();
  
  let addMessage = (text,id) => {
    props.store.dispatch(addMessageActionCreator(text,id));
} 
  return (
  <Messages friendsPage = {state.friendsPage} addMessage={addMessage}/>
  )
}

export default MessagesContainer;