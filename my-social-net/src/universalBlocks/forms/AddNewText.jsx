import React from 'react';
import { Field } from 'redux-form';
import { required} from '../../utils/validations/validation';
import styles from './AddNewText.module.css';

const FormAddNewText = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field className={styles.inputText} name={props.name} 
            component="textarea" type="text" placeholder={props.placeholder}
            validate={[required]} />
          </div>
          <div>
            <button className={styles.inputSubmit}>Send</button>
          </div>
        </form>
    )
}

export default FormAddNewText