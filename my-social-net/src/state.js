import React from 'react';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Hello! How are you?', likes: 3, likeClick: 0 },
        { id: 2, text: 'My name is Kirill!', likes: 8, likeClick: 0 },
        { id: 3, text: 'Good life', likes: 5, likeClick: 0 }
      ],
    },

    friendsPage: {
      friends: [
        { id: 1, name: 'Andrey', avatar: 'https://www.meme-arsenal.com/memes/005754c81977199be7a2fb68c8f48107.jpg' },
        { id: 2, name: 'Shaha', avatar: 'https://plastok.com.ua/images/reviews/1579759589_inbound5909117393130304794.jpg' },
        { id: 3, name: 'Denis', avatar: 'http://discord-me.ru/wp-content/uploads/2017/12/Logotip-Diskorda.png' },
        { id: 4, name: 'Vlad', avatar: 'https://pp.userapi.com/c638527/v638527117/264a/6BgztT1ZoOo.jpg' },
        { id: 5, name: 'Oleg', avatar: 'https://avatarko.ru/img/kartinka/16/igra_Minecraft_Endermen_15969.jpg' },
        { id: 6, name: 'Lera', avatar: 'https://99px.ru/sstorage/1/2012/09/image_11109121919597572619.jpg' },
        { id: 7, name: 'Inna', avatar: 'https://image.freepik.com/free-vector/_1284-1932.jpg' }
      ],

      messages: {
        1: [
          { id: 1, name: 'Andrey', text: 'Hello!' },
          { id: 2, name: 'Me', text: 'Hi!' },
          { id: 3, name: 'Andrey', text: 'How are you?' },
          { id: 4, name: 'Me', text: 'I`m ok, and you?' },
          { id: 5, name: 'Andrey', text: 'I`m fine!' }
        ],
        2: [
          { id: 1, name: 'Shasha', text: 'Hello!' },
        ],
        3: [

        ],
        4: [

        ],
        5: [

        ],
        6: [

        ],
        7: [

        ],
      }
    }

  },
  _rerenderAll() {
    console.log('Rerender');
  },
  getState() {
    return this._state;
  },
  observer(rerender) {
    this._rerenderAll = rerender;
  },
  dispatch(action) {

    if (action.type === "ADD-POST") {
      let newId = this._state.profilePage.posts.length + 1;
      let newLikes = 0;
      let newPost = {
        id: newId,
        text: action.newText,
        likes: newLikes,
        likeClick: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._rerenderAll(this._state);
    } else if (action.type === "ADD-LIKE") {
      for (let k of this._state.profilePage.posts) {
        if (k.text == action.clickPost.text) {
          if (k.likeClick == 0) {
            k.likes += 1;
            k.likeClick = 1;
          } else {
            k.likes -= 1;
            k.likeClick = 0;
          }
          this._rerenderAll(this._state);
        }
      }
    } else if (action.type === "ADD-MESSAGE") {
      let newId = this._state.friendsPage.messages[action.id].length + 1;
      let newMessage = {
        id: newId, 
        name: 'Me', 
        text: action.newMessage,
      };
      this._state.friendsPage.messages[action.id].push(newMessage);
      this._rerenderAll(this._state);
    }


  }
}

export const addPostActionCreator = (text) => {
  return {
    type: "ADD-POST",
    newText: text,
  }
}

export const addLikeActionCreator = (props) => {
  return {
    type: "ADD-LIKE",
    clickPost: props
  }
}

export const addMessageActionCreator = (text,id) => {
  return {
    type: "ADD-MESSAGE",
    newMessage: text,
    id: id
  }
}

export { store };