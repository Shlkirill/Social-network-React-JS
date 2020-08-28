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

let initialState = {
  posts: [
    { id: 1, text: 'Hello! How are you?', likes: 3, likeClick: 0 },
    { id: 2, text: 'My name is Kirill!', likes: 8, likeClick: 0 },
    { id: 3, text: 'Good life', likes: 5, likeClick: 0 }
  ],
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case "ADD-POST":
      stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      let newId = stateCopy.posts.length + 1;
      let newLikes = 0;
      let newPost = {
        id: newId,
        text: action.newText,
        likes: newLikes,
        likeClick: 0
      };
      stateCopy.posts.push(newPost);
      return stateCopy;
    case "ADD-LIKE":
      stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      for (let k of stateCopy.posts) {
        if (k.text == action.clickPost.text) {
          if (k.likeClick == 0) {
            k.likes += 1;
            k.likeClick = 1;
          } else {
            k.likes -= 1;
            k.likeClick = 0;
          }
        }
      }
      return stateCopy;
    default:
      return state;
  }
}

export default profileReducer;