import React, { useState } from 'react';
import Loading from '../../../common/loading/loading';
import styles from './ProfileInfo.module.css'
import photoDefault from '../../../img/empty-avatar.png'
import { BottonToggleFollow } from '../../../common/toggleFollow/BottonToggleFollow';
import ProfileStatus from './ProfileStatus';
import { NavLink } from 'react-router-dom';
import { PropsTypeProfileInfo } from '../Profile';



const ProfileInfo: React.FC<PropsTypeProfileInfo> = (props) => {

  let [uploadMode, setpUploadMode] = useState(false);

  if (!props.profile) {
    return <Loading />
  }

  let onUploadMode = () => {
    setpUploadMode(true);
  }
  let offUploadMode = (e: any) => {
    if (!e.target.dataset.click) return
    setpUploadMode(false);
  }
  let onToggleFollow = () => {
    props.togglefollowUser(props.profile.userId, props.followed);
  };
  let onUploadanAvatar = (e: any) => {
    if (e.target.previousSibling.files.length > 0) {
      props.putAvatarToServer(e.target.previousSibling.files[0]);
      setpUploadMode(false);
    }
  };
  return (
    <div className={styles.profileInfo}>
      <div className={styles.user}>
        <div className={styles.userAvatarAndFollow}>
          <div>
            <img src={props.profile.photos.large || photoDefault} className={styles.avatar} />
          </div>
          <div className={styles.buttonUnderAvatar}>
            {props.profile.userId !== props.authId ?
              BottonToggleFollow('ONE_USER', onToggleFollow, props.followed, props.isProgress, null) :
              <button className={styles.buttonEditAvatar} onClick={onUploadMode}>Edit avatar</button>}
          </div>
        </div>
        <div className={styles.info}>
          <h4>{props.profile.fullName}</h4>
          <p><ProfileStatus status={props.status} getUpdateSatus={props.getUpdateSatus}
            getUserStatus={props.getUserStatus} authId={props.authId} userId={props.profile.userId} /></p>
          <p><span>LookingForAJob:</span> {props.profile.lookingForAJob ? 'Yes' : 'No'}</p>
          <p><span>LookingForAJobDescription:</span> {props.profile.lookingForAJobDescription}</p>
          <p><span>About me:</span> {props.profile.aboutMe}</p>
          <div className={styles.social}>
            {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}><i className="fab fa-facebook-square"></i></a> : null}
            {props.profile.contacts.website ? <a href={props.profile.contacts.website}><i className="far fa-window-restore"></i></a> : null}
            {props.profile.contacts.vk ? <a href={props.profile.contacts.vk}><i className="fab fa-vk"></i></a> : null}
            {props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}><i className="fab fa-twitter-square"></i></a> : null}
            {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}><i className="fab fa-instagram"></i></a> : null}
            {props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}><i className="fab fa-youtube"></i></a> : null}
            {props.profile.contacts.github ? <a href={props.profile.contacts.github}><i className="fab fa-github-square"></i></a> : null}
            {props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink}><i className="fas fa-external-link-square-alt"></i></a> : null}
          </div>
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