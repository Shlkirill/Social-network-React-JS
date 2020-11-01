import React, { useState } from 'react';
import Loading from '../../../common/loading/loading';
import styles from './ProfileInfo.module.css'
import photoDefault from '../../../img/empty-avatar.png'
import { BottonToggleFollow } from '../../../common/toggleFollow/BottonToggleFollow';
import ProfileStatus from './ProfileStatus';
import EditProfile from './EditProfile/EditProfile';
import { NavLink, Route } from 'react-router-dom';

const ProfileInfo = (props) => {

  let [uploadMode, setpUploadMode] = useState(false);

  if (!props.profile) {
    return <Loading />
  }

  let onUploadMode = () => {
    setpUploadMode(true);
  }
  let offUploadMode = (e) => {
    if (!e.target.dataset.click) return
    setpUploadMode(false);
  }
  let onToggleFollow = () => {
    props.togglefollowUser(props.profile.userId, props.followed);
  };
  let onUploadanAvatar = (e) => {
    if (e.target.previousSibling.files.length > 0) {
      props.putAvatarToServer(e.target.previousSibling.files[0]);
      setpUploadMode(false);
    }
  };
  return (
    <div>
      <img src='http://dgdesign.ru/uploads/posts/2018-05/1525700405_shapka-sayta-tehnologii-2114654127851.jpg' className={styles.image} />
      <div className={styles.user}>
        <div className={styles.userAvatarAndFollow}>
          <div>
            <img src={props.profile.photos.large || photoDefault} className={styles.avatar} />
          </div>
          <div>
            {props.profile.userId !== props.authId ?
              BottonToggleFollow('ONE_USER', onToggleFollow, props.followed, props.isProgress, props.id) :
              <div>
                <button onClick={onUploadMode}>Upload New Avatar</button>
              </div>
            }
          </div>
        </div>
        <div className={styles.info}>
          <h4>{props.profile.fullName}</h4>
          <p><ProfileStatus status={props.status} getUpdateSatus={props.getUpdateSatus}
            getUserStatus={props.getUserStatus} authId={props.authId} userId={props.profile.userId} /></p>
          <p><span>Date of Birth: </span>12.08.1994 g.</p>
          <p><span>City: </span>Belogorod</p>
          <p><span>Education: </span>Belgorod economic university</p>
          <p><span>tel.: </span>8-800-555-35-35</p>
          <p><span>About me:</span> {props.profile.aboutMe}</p>
          <div className={styles.social}><a href={props.profile.contacts.vk}><i class="fab fa-vk"></i></a><a href={props.profile.contacts.instagram}><i class="fab fa-instagram"></i></a><a href={props.profile.contacts.facebook}><i class="fab fa-facebook-square"></i></a></div>
          {props.profile.userId == props.authId ?
            <div className={styles.editButton}>
              <NavLink to='/edit'><button>Edit Profile</button></NavLink>
            </div> : null}
        </div>
      </div>
      <div className={uploadMode ? styles.popUpUploadAvatarContainer : styles.hidden} onClick={offUploadMode} data-click={'parent'}>
        <div className={styles.popUpUploadAvatar}>
          <input type='file' accept='image/*,image/jpeg' />
          <button onClick={onUploadanAvatar}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;