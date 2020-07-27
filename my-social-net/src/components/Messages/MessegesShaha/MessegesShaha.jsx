import React from 'react';
import styles from './MessegesShaha.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';

const MessegesShaha = () => {
    return(
        <div className={styles.allMessages}> 
            <DialogMe name='Me' text='No, i`m working'/>
            <Dialog name='Shaha' text='Let`s go to city'/>
            <DialogMe name='Me' text='No, i`m working'/>
            <Dialog name='Shaha' text='Bad'/>
            <div className={styles.chatInput}>
                <textarea placeholder='new message'></textarea>
                <button><i class="far fa-arrow-alt-circle-right"></i></button>
            </div>
        </div>   
    )
}

export default MessegesShaha;