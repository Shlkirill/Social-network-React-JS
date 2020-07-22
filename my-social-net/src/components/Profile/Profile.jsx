import React from 'react';
import styles from'./Profile.module.css'

function Profile() {
  return(
    <div className={styles.main}>
      <img src='http://dgdesign.ru/uploads/posts/2018-05/1525700405_shapka-sayta-tehnologii-2114654127851.jpg' className={styles.image}/>
      <div className={styles.user}>
          <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/>
        <div className={styles.info}>
          <h4>Kirill S.H</h4>
          <p><span>Date of Birth: </span>12.08.1994 g.</p>
          <p><span>City: </span>Belogorod</p>
          <p><span>Education: </span>Belgorod economic university</p>
          <p><span>tel.: </span>8-800-555-35-35</p>
        </div>
      </div>  
        <div className={styles.side}>
          <div className={styles.newMessage}>
            <h3> My posts</h3>
            <input type='text' className={styles.inputText}/>
            <input type='submit' className={styles.inputSubmit}/>
          </div>
          <div className={styles.allMessages}>
              <div className={styles.messages}> 
                <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/>
                <p>Hello all! How are you?</p>
              </div>
              <div className={styles.messages}> 
                <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className={styles.avatar}/>
                <p>I from city in Belgorod</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Profile;