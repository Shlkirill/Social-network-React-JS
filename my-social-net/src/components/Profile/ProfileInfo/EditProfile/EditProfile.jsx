import React, { useState } from 'react';
import styles from './EditProfile.module.css'

const EditProfile = (props) => {

  return (
    <div>
      <div className={styles.inputForm}>
        <div>FullName:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Looking for a job:</div>
        <div><input type="checkbox" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Your professional skills:</div>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
      </div>
      <div className={styles.inputForm}>
        <div>About me:</div>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
      </div>
      <div>Contact:</div>
      <div className={styles.inputForm}>
        <div>Facebook:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Github:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Instagram:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>MainLink:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Twitter:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Vk:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Website:</div>
        <div><input type="text" /></div>
      </div>
      <div className={styles.inputForm}>
        <div>Youtube:</div>
        <div><input type="text" /></div>
      </div>
    </div>
  )
}

export default EditProfile;