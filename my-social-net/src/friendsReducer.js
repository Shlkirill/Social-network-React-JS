
  
  export const addMessageActionCreator = (text, id) => {
    return {
      type: "ADD-MESSAGE",
      newMessage: text,
      id: id
    }
  }

const friendsReducer = (state, action) => {
    if (action.type === "ADD-MESSAGE") {
        let newId = state.messages[action.id].length + 1;
        let newMessage = {
            id: newId,
            name: 'Me',
            text: action.newMessage,
        };
        state.messages[action.id].push(newMessage);
    }
    return state;
}

export default friendsReducer;