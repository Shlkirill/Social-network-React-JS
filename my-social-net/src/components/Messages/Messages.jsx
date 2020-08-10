import React from 'react';
import styles from './Messages.module.css';
import DialogueWindow from './DialogueWindow/DialogueWindow';
import { Route } from 'react-router-dom';
import DialogWithPerson from './DialogWithPerson/DialogWithPerson';


const Messages = (props) => {

  let interlocutorName = props.friendsPage.friends.map(item => <DialogWithPerson name={item.name} id={item.id} img={item.avatar}/>);
  
  let dialogWindowName = interlocutorName.map((item) => {
    return <Route path={`/messages/${item.props.id}`}><DialogueWindow messages={props.friendsPage.messages} id={item.props.id} img={item.props.img} dispatch={props.dispatch}/></Route>
  });

  return (
      <div>
        <h4 className={styles.headline}>Messages</h4>
        <div className={styles.messages}>
            <ul className={styles.dialogs}>
                {interlocutorName}
            </ul>
            {dialogWindowName}
        </div>
      </div>
    )
  }

export default Messages;