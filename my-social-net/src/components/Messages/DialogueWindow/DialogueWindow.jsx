import React from 'react';
import styles from './DialogueWindow.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';
import { addMessageActionCreator } from '../../../redux/friendsReducer';

const DialogueWindow = (props) => {;
    let dialog = props.messages[props.id].map(item => {
        return (item.name !== 'Me') ? 
        <Dialog key={item.id} name={item.name} text={item.text} img={props.img}/> : <DialogMe key={item.id} name={item.name} text={item.text}/>
        });
    let onAddMessage = () => {
        let text = newMessageElement.current.value;
        let id = props.id;
        props.addMessage(text,id);
        newMessageElement.current.value = '';
    } 
     
    let newMessageElement = React.createRef();

    return(
        <div className={styles.allMessages}> 
            {dialog}
            <div className={styles.chatInput}>
                <textarea ref={newMessageElement} placeholder='new message'></textarea>
                <button onClick={onAddMessage}><i class="far fa-arrow-alt-circle-right"></i></button>
            </div>
        </div>   
    )
}

export default DialogueWindow;