import React from 'react';
import styles from './Messages.module.css';
import DialogueWindow from './DialogueWindow/DialogueWindow';
import { NavLink } from 'react-router-dom';
import { Route, BrowserRouter } from 'react-router-dom';

const DialogName = (props) => {
  return (
  <li><NavLink activeClassName={styles.active} to={'/messages/'+ props.id}>{props.name}</NavLink></li>
  )

}

const Messages = () => {
  
  let dialogsData = [
    { id: 1, name: 'Andrey'},
    { id: 2, name: 'Shaha'},
    { id: 3, name: 'Denis'},
    { id: 4, name: 'Vlad'},
    { id: 5, name: 'Oleg'},
    { id: 6, name: 'Lera'}
  ]; 

  let interlocutorName = dialogsData.map((item) => {
    return <DialogName name={item.name} id={item.id}/>
  });

  return (
      <div>
        <h4 className={styles.headline}>Messages</h4>
        <div className={styles.messages}>
            <ul className={styles.dialogs}>
                {interlocutorName}
            </ul>
            <Route path='/messages/1' component={DialogueWindow}/>
            <Route path='/messages/2' component={DialogueWindow}/>
        </div>
      </div>
    )
  }

export default Messages;