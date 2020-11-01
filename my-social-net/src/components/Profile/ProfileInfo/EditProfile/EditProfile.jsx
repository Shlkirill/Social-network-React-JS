import React from 'react';
import { Field} from 'redux-form';
import styles from './EditProfile.module.css'

const EditProfile = (props) => {
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
      <div>Contact:</div>
      <div className={styles.inputForm}>
        <div>Facebook:</div>
        <div><Field type="text" component="input" name='contacts.facebook' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Github:</div>
        <div><Field type="text" component="input" name='contacts.github' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Instagram:</div>
        <div><Field type="text" component="input" name='contacts.instagram' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>MainLink:</div>
        <div><Field type="text" component="input" name='contacts.mainLink' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Twitter:</div>
        <div><Field type="text" component="input" name='contacts.twitter' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Vk:</div>
        <div><Field type="text" component="input" name='contacts.vk' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Website:</div>
        <div><Field type="text" component="input" name='contacts.website' /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Youtube:</div>
        <div><Field type="text" component="input" name='contacts.youtube' /></div>
      </div>
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