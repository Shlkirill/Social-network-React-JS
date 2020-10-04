import React from 'react';
import { Field } from 'redux-form';
import { required, maxLength, minLength } from '../../utils/validations/validation';
import { TextareaField } from './formsControls/formsControls.jsx'
import styles from './AddNewText.module.css';

const minLength2 = minLength(2)
const maxLength15 = maxLength(15)
const maxLength100 = maxLength(100)

const FormAddNewText = (props) => {
  
  const validateCreactor = () => {
    switch (props.name) {
      case 'newPost':
        return [required, maxLength15, minLength2]
      case 'newMessage':
        return [required, maxLength100]
    }
  }

  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field className={styles.inputText} name={props.name}
          component={TextareaField} type="text" placeholder={props.placeholder}
          validate={validateCreactor()} />
      </div>
      <div>
        <button className={styles.inputSubmit}>Send</button>
      </div>
    </form>
  )
}

export default FormAddNewText