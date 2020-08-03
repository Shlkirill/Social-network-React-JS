import React from 'react';
import styles from './DialogueWindow.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';

const DialogueWindow = (props) => {

    
    let dialog = props.messages.map(item => {
        return (item.name !== 'Me') ? 
        <Dialog name={item.name} text={item.text}/> : <DialogMe name={item.name} text={item.text}/>
        });

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    } 
     
    let newMessageElement = React.createRef();

    console.log(newMessageElement)
    return(
        <div className={styles.allMessages}> 
            {dialog}
            <div className={styles.chatInput}>
                <textarea ref={newMessageElement} placeholder='new message'></textarea>
                <button onClick={addMessage}><i class="far fa-arrow-alt-circle-right"></i></button>
            </div>
        </div>   
    )
}

export default DialogueWindow;