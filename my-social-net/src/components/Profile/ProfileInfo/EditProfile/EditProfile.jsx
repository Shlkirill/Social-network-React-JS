import React from 'react';
import { Field } from 'redux-form';
import styles from './EditProfile.module.css'

const EditProfile = (props) => {
  let contactsArr = Object.keys(props.profile.contacts).map((a) => {
    return <div className={styles.inputForm}>
      <div className={styles.inputName}>{a}:</div>
      <div className={styles.inputFieldParent}><Field className={styles.inputField} type="text" component="input" name={`contacts.${a}`} /></div>
    </div>
  })
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.container}>
        <div className={styles.editProfile}>
          <h3 className={styles.title}>Edit profile</h3>
          <div className={styles.inputForm}>
            <div className={styles.inputName}>FullName:</div>
            <div className={styles.inputFieldParent}><Field className={styles.inputField} type="text" component="input" name='fullName' /></div>
          </div>
          <div className={styles.inputForm}>
            <div className={styles.inputName}>Looking for a job:</div>
            <div className={styles.inputFieldParent}><Field className={styles.inputField} type="checkbox" component="input" name='lookingForAJob' /></div>
          </div>
          <div className={styles.inputForm}>
            <div className={styles.inputName}>Your professional skills:</div>
            <div className={styles.inputFieldParent}><Field className={`${styles.inputField} ${styles.textareaField}`} type="text" component="textarea" name='lookingForAJobDescription' /></div>
          </div>
          <div className={styles.inputForm}>
            <div className={styles.inputName}>About me:</div>
            <div className={styles.inputFieldParent}><Field className={`${styles.inputField} ${styles.textareaField}`} type="text" component="textarea" name='aboutMe' /></div>
          </div>

          {contactsArr}

          <div className={styles.submitContainer}>
            <button className={styles.submit}>Сохранить</button>
          </div>
          {props.error &&
            <div className={styles.error}>
              {props.error}
            </div>}
          {props.submitSucceeded &&
            <div className={styles.submitSucceeded}>
              Information has been edited and will appear on your page
      </div>}
        </div>
      </div>
    </form>
  )
}
export default EditProfile