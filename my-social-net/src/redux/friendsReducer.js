import { act } from "@testing-library/react";

export const addMessageActionCreator = (text, id) => {
  return {
    type: "ADD-MESSAGE",
    newMessage: text,
    id: id
  }
}
export const addFriendAC = (id, avatar, name) => {
  return {
    type: "ADD-FRIEND",
    id,
    avatar,
    name
  }
}
let initialState = {
  friends: [{id:1, name:'kirill'}
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
};

const friendsReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case "ADD-MESSAGE":
      stateCopy = {
        ...state,
        messages: { ...state.messages },
      };
      let newId = stateCopy.messages[action.id].length + 1;
      let newMessage = {
        id: newId,
        name: 'Me',
        text: action.newMessage,
      };
      stateCopy.messages[action.id].push(newMessage);
      return stateCopy;
    case "ADD-FRIEND":
      let newFriend = {
        id: action.id,
        name: action.name,
        avatar: action.avatar
      }
      stateCopy = {
        ...state,
      };
      stateCopy.friends.push(newFriend);
      console.log(stateCopy);
      return stateCopy;
    default:
      return state;
  }
}

export default friendsReducer;