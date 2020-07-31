import React from 'react';
import styles from './DialogueWindow.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';

const DialogueWindow = (props) => {

    
    let dialog = props.messages.map(item => {
        return (item.name !== 'Me') ? 
        <Dialog name={item.name} text={item.text}/> : <DialogMe name={item.name} text={item.text}/>
        });

    
    return(
        <div className={styles.allMessages}> 
            {dialog}
            <div className={styles.chatInput}>
                <textarea placeholder='new message'></textarea>
                <button><i class="far fa-arrow-alt-circle-right"></i></button>
            </div>
        </div>   
    )
}

export default DialogueWindow;