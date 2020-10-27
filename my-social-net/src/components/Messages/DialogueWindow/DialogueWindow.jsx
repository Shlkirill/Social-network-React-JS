import React from 'react';
import styles from './DialogueWindow.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';
import FormAddNewText from '../../../common/forms/AddNewText';
import { reduxForm } from 'redux-form';

const DialogueWindow = (props) => {
    const ContactForm = reduxForm({
        form: 'newMessage'
    })(FormAddNewText);

    const onSubmit = (formData) => {
        props.addMessage(formData.newMessage, props.id)

    }
    let dialog = props.messages[props.id].map(item => {
        return (item.name !== 'Me') ?
            <Dialog key={item.id} name={item.name} text={item.text} img={props.img} /> : <DialogMe key={item.id} name={item.name} text={item.text} />
    });

    return (
        <div className={styles.allMessages}>
            {dialog}
            <div className={styles.chatInput}>
                <ContactForm onSubmit={onSubmit} name={'newMessage'} placeholder={'send new message'} />
            </div>
        </div>
    )
}

export default DialogueWindow;