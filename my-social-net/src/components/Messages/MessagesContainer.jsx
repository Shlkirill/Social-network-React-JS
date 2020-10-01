import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirectComponent } from '../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/friendsReducer';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

const MessagesContainer = (props) => {
  const onSubmit = (formData) =>{
    debugger;
    props.addMessage(formData.newMessage, 1)
    
  }

  return (
  <ContactForm {...props} onSubmit={onSubmit}/>
  )
}

const ContactForm = reduxForm({
  form: 'newMessage'
})(Messages);


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
)(MessagesContainer);