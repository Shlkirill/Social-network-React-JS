import React from 'react';
import styles from './DialogueWindow.module.css';
import Dialog from '../Dialog/Dialog';
import DialogMe from '../DialogMe/DialogMe';
import FormAddNewText from '../../../common/forms/AddNewText';
import { reduxForm } from 'redux-form';
import { messagesType } from '../../../redux/friendsReducer';

type FormDataType = {
    newMessage: string,
    password: string
}

type PropsType = {
    addMessage: (message: string, id: number) => void,
    messages: null| Array<messagesType>,
    img: string,
    id: number,
}

const DialogueWindow: React.FC<PropsType> = (props) => {
    const ContactForm = reduxForm({
        form: 'newMessage'
        //@ts-ignore
    })(FormAddNewText);

    const onSubmit = (formData:FormDataType) => {
        props.addMessage(formData.newMessage, props.id)

    }
    //@ts-ignore
    let dialog = props.messages[props.id].map(item => {
        return (item.name !== 'Me') ?
            <Dialog key={item.id} name={item.name} text={item.text} img={props.img} /> : <DialogMe key={item.id} name={item.name} text={item.text} />
    });

    return (
        <div className={styles.allMessages}>
            {dialog}
            <div className={styles.chatInput}> 
            {/* @ts-ignore */}
                <ContactForm onSubmit={onSubmit} name={'newMessage'} placeholder={'send new message'} />
            </div>
        </div>
    )
}

export default DialogueWindow;