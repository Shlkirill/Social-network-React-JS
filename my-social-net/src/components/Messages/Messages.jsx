import React from 'react';
import styles from './Messages.module.css';
import MessegesAndrey from './MessegesAndrey/MessegesAndrey';
import { NavLink } from 'react-router-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import MessegesShaha from './MessegesShaha/MessegesShaha';

const DialogItem = (props) => {
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
  ]; 
  
  return (
      <div>
        <h4 className={styles.headline}>Messages</h4>
        <div className={styles.messages}>
            <ul className={styles.dialogs}>
              <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
              <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
              <DialogItem name='Denis' id='3'/>
              <DialogItem name='Vlad' id='4'/>
              <DialogItem name='Oleg' id='5'/>
            </ul>
            <Route path='/messages/1' component={MessegesAndrey}/>
            <Route path='/messages/2' component={MessegesShaha}/>
        </div>
      </div>
    )
  }

export default Messages;