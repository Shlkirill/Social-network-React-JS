import React from 'react';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import DialogMe from './DialogMe/DialogMe';

function Messages() {
    return (
      <div>
        <h4 className={styles.headline}>Messages</h4>
        <div className={styles.messages}>
            <ul className={styles.dialogs}>
              <li>Andrey</li>
              <li>Shaha</li>
              <li>Vlad</li>
              <li>Denis</li>
              <li>Daniil</li>
              <li>Oleg</li>
            </ul>
          <div className={styles.allMessages}> 
            <Dialog name='Andrey' text='Hello!'/>
            <Dialog name='Andrey' text='How are you?'/>
            <DialogMe name='Me' text='I`m ok, and you?'/>
            <Dialog name='Andrey' text='I`m fine!'/>
            <div className={styles.chatInput}>
              <textarea placeholder='new message'></textarea>
              <button><i class="far fa-arrow-alt-circle-right"></i></button>
            </div>
          </div>   
        </div>
      </div>
    )
  }

export default Messages;