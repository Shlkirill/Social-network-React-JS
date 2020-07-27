import React from 'react';
import styles from './MessegesAndrey.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';

const MessegesAndrey = () => {
    return(
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
    )
}

export default MessegesAndrey;