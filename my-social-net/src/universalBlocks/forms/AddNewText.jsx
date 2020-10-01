import React from 'react';
import { Field } from 'redux-form';
import styles from './AddNewText.module.css';

const FormAddNewText = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field className={styles.inputText} name={props.name} component="textarea" type="text" placeholder={props.placeholder} />
          </div>
          <div>
            <button className={styles.inputSubmit}>Send</button>
          </div>
        </form>
    )
}

export default FormAddNewText