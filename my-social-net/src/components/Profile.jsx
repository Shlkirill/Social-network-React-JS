import React from 'react';

function Profile() {
  return(
    <div className='main'>
      <img src='http://dgdesign.ru/uploads/posts/2018-05/1525700405_shapka-sayta-tehnologii-2114654127851.jpg' className='main__topImg' />
      <div className='user'>
          <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className='user__avatar'/>
        <div className='user__info'>
          <h4>Kirill S.H</h4>
          <p><span>Date of Birth: </span>12.08.1994 g.</p>
          <p><span>City: </span>Belogorod</p>
          <p><span>Education: </span>Belgorod economic university</p>
          <p><span>tel.: </span>8-800-555-35-35</p>
        </div>
      </div>  
        <div className='side'>
          <div className='side__newMessage'>
            <h3> My posts</h3>
            <input type='text' className='side__text'/>
            <input type='submit' className='side__submit'/>
          </div>
          <div className='side__allMessages'>
              <div className='side__messages'> 
                <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className='side__avatar'/>
                <p>Hello all! How are you?</p>
              </div>
              <div className='side__messages'> 
                <img src='https://clraik.com/forum/customavatars/avatar14341_15.gif' className='side__avatar'/>
                <p>I from city in Belgorod</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Profile;