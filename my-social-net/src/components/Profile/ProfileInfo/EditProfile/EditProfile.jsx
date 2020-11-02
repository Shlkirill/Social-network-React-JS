import React from 'react';
import { Field } from 'redux-form';
import styles from './EditProfile.module.css'

const EditProfile = (props) => {
  let contactsArr = Object.keys(props.profile.contacts).map((a) => {
    return <div className={styles.inputForm}>
      <div>{a}:</div>
      <div><Field type="text" component="input" name={`contacts.${a}`} /></div>
    </div>
  })
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.inputForm}>
        <div>FullName:</div>
        <div><Field type="text" component="input" name='fullName' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Looking for a job:</div>
        <div><Field type="checkbox" component="input" name='lookingForAJob' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Your professional skills:</div>
        <div><Field type="text" component="textarea" name='lookingForAJobDescription' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>About me:</div>
        <div><Field type="text" component="textarea" name='aboutMe' /></div>
      </div>

      {contactsArr}

      <button>Сохранить</button>
      {props.error &&
        <div className={styles.error}>
          {props.error}
        </div>}
      {props.submitSucceeded &&
        <div className={styles.submitSucceeded}>
          Information has been edited and will appear on your page
      </div>}
    </form>
  )
}
export default EditProfile