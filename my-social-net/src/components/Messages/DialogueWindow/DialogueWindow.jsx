import React from 'react';
import styles from './DialogueWindow.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';

const DialogueWindow = () => {
       
    let dialogData = [
        {id: 1, name: 'Andrey', text: 'Hello!'},
        {id: 2, name: 'Me', text: 'Hi!'},
        {id: 3, name: 'Andrey', text: 'How are you?'},
        {id: 4, name: 'Me', text: 'I`m ok, and you?'},
        {id: 5, name: 'Andrey', text: 'I`m fine!'},
    ];

    let dialog = dialogData.map(item => {
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