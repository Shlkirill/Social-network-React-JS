import React from 'react';
import styles from './Messages.module.css';
import DialogueWindow from './DialogueWindow/DialogueWindow';
import { Route } from 'react-router-dom';
import DialogWithPerson from './DialogWithPerson/DialogWithPerson';


const Messages = (props) => {

  let interlocutorName = props.friendsPage.friends.map(item => <DialogWithPerson name={item.name} id={item.id} img={item.avatar}/>);

  return (
      <div>
        <h4 className={styles.headline}>Messages</h4>
        <div className={styles.messages}>
            <ul className={styles.dialogs}>
                {interlocutorName}
            </ul>
            <Route path='/messages/1'><DialogueWindow messages={props.friendsPage.messages}/></Route>
            <Route path='/messages/2'><DialogueWindow messages={props.friendsPage.messages}/></Route>
        </div>
      </div>
    )
  }

export default Messages;