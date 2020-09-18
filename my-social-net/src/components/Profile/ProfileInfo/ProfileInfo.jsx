import React from 'react';
import Loading from '../../../universalBlocks/loading/loading';
import styles from './ProfileInfo.module.css'
import photoDefault from '../../../img/empty-avatar.png'
import { BottonToogleFollow } from '../../../universalBlocks/toogleFollow/BottonToggleFollow';
import { apiFollowUser, apiUnfollowUser } from '../../../api/api';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loading />
  }
  let onToogleFollow = () => {
    if (props.followed == false) {
      apiFollowUser(props.profile.userId).then(() =>{
        props.setFollowedUser(true);
      });
    } else {
      apiUnfollowUser(props.profile.userId).then(() =>{
        props.setFollowedUser(false);
      });;
    }
  };
  return (
    <div>
      <img src='http://dgdesign.ru/uploads/posts/2018-05/1525700405_shapka-sayta-tehnologii-2114654127851.jpg' className={styles.image} />
      <div className={styles.user}>
        <div className={styles.userAvatarAndFollow}>
          <img src={props.profile.photos.large || photoDefault} className={styles.avatar} />
          {props.profile.userId !== 2 ? BottonToogleFollow(props.followed, onToogleFollow) : null}
        </div>
        <div className={styles.info}>
          <h4>{props.profile.fullName}</h4>
          <p><span>Date of Birth: </span>12.08.1994 g.</p>
          <p><span>City: </span>Belogorod</p>
          <p><span>Education: </span>Belgorod economic university</p>
          <p><span>tel.: </span>8-800-555-35-35</p>
          <p><span>About me:</span> {props.profile.aboutMe}</p>
          <div className={styles.social}><a href={props.profile.contacts.vk}><i class="fab fa-vk"></i></a><a href={props.profile.contacts.instagram}><i class="fab fa-instagram"></i></a><a href={props.profile.contacts.facebook}><i class="fab fa-facebook-square"></i></a></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;