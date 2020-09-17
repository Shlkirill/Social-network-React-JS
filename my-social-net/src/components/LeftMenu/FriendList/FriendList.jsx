import React from 'react';
import styles from './FriendList.module.css'
import Friend from './Friend/Friend';
import Slider from "react-slick";

const FriendList = (props) => {
  let friends = props.friends.map( (item) => {
    return <Friend key={item.id} avatar={item.avatar} name={item.name} />
  });

  let settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2
  };  

  return (
    <div className={styles.friendsList}>
      <p>Friend</p>
        <Slider className={styles.friendsWindow} {...settings}>
          {friends}
        </Slider>
    </div>
  )
}
export default FriendList;