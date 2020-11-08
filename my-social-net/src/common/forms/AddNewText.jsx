import React from 'react';
import { Field } from 'redux-form';
import { required, maxLength, minLength } from '../../utils/validations/validation';
import { TextareaField } from './formsControls/formsControls.jsx'
import styles from './AddNewText.module.css';

const maxLength100 = maxLength(100)
const maxLength200 = maxLength(200)

const FormAddNewText = (props) => {

  const validateCreactor = () => {
    switch (props.name) {
      case 'newPost':
        return [maxLength200]
      case 'newMessage':
        return [maxLength100]
    }
  }
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field className={styles.inputText} name={props.name}
          component={TextareaField} type="text" placeholder={props.placeholder}
          validate={validateCreactor()} />
      </div>
      <div className={styles.inputSubmit}>
        <button disabled={props.pristine || props.submitting || props.invalid}>Send</button>
      </div>
    </form>
  )
}

export default FormAddNewText