import React from 'react';

// let rerenderAll = () => {
//   console.log('Rerender');
// }

// let state = {

//   profilePage: {
//     posts: [
//       { id: 1, text: 'Hello! How are you?', likes: 3, likeClick: 0 },
//       { id: 2, text: 'My name is Kirill!', likes: 8, likeClick: 0 },
//       { id: 3, text: 'Good life', likes: 5, likeClick: 0 }
//     ],
//   },

//   friendsPage: {
//     friends: [
//       { id: 1, name: 'Andrey', avatar: 'https://www.meme-arsenal.com/memes/005754c81977199be7a2fb68c8f48107.jpg' },
//       { id: 2, name: 'Shaha', avatar: 'https://plastok.com.ua/images/reviews/1579759589_inbound5909117393130304794.jpg' },
//       { id: 3, name: 'Denis', avatar: 'http://discord-me.ru/wp-content/uploads/2017/12/Logotip-Diskorda.png' },
//       { id: 4, name: 'Vlad', avatar: 'https://pp.userapi.com/c638527/v638527117/264a/6BgztT1ZoOo.jpg' },
//       { id: 5, name: 'Oleg', avatar: 'https://avatarko.ru/img/kartinka/16/igra_Minecraft_Endermen_15969.jpg' },
//       { id: 6, name: 'Lera', avatar: 'https://99px.ru/sstorage/1/2012/09/image_11109121919597572619.jpg' },
//       { id: 7, name: 'Inna', avatar: 'https://image.freepik.com/free-vector/_1284-1932.jpg' }
//     ],

//     messages: [
//       { id: 1, name: 'Andrey', text: 'Hello!' },
//       { id: 2, name: 'Me', text: 'Hi!' },
//       { id: 3, name: 'Andrey', text: 'How are you?' },
//       { id: 4, name: 'Me', text: 'I`m ok, and you?' },
//       { id: 5, name: 'Andrey', text: 'I`m fine!' }
//     ],
//   }

// }

// let addPost = (postText) => {
//   let newId = state.profilePage.posts.length + 1;
//   let newLikes = 0;
//   let newPost = {
//     id: newId,
//     text: postText,
//     likes: newLikes,
//     likeClick: 0
//   };

//   state.profilePage.posts.push(newPost)
//   rerenderAll(state);
// }

// let addLike = (props) => {
//   for (let k of state.profilePage.posts) {

//     if (k.text == props.text) {
//       if (k.likeClick == 0) {
//         k.likes += 1;
//         k.likeClick = 1;
//       } else {
//         k.likes -= 1;
//         k.likeClick = 0;
//       }
//       rerenderAll(state);
//     }
//   }
// }

// let observer = (rerender) => {
//   rerenderAll = rerender;
// }


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

      messages: [
        { id: 1, name: 'Andrey', text: 'Hello!' },
        { id: 2, name: 'Me', text: 'Hi!' },
        { id: 3, name: 'Andrey', text: 'How are you?' },
        { id: 4, name: 'Me', text: 'I`m ok, and you?' },
        { id: 5, name: 'Andrey', text: 'I`m fine!' }
      ],
    }

  },
  getState() {
    return this._state;
  },
  addPost(postText) {
    let newId = this._state.profilePage.posts.length + 1;
    let newLikes = 0;
    let newPost = {
      id: newId,
      text: postText,
      likes: newLikes,
      likeClick: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._rerenderAll(this._state);
  },
  addLike(props) {
    for (let k of this._state.profilePage.posts) {
  
      if (k.text == props.text) {
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
  },
  _rerenderAll() {
    console.log('Rerender');
  },
  observer(rerender) {
    this._rerenderAll = rerender;
  },
  dispath(action) {

  }
}

export {store};