export const followActionCreator = (followed, id) => {
  return {
    type: "FOLLOW",
    followedText: followed,
    number: id,
  }
}


let initialState = {
  users: [
    { id: 1, followed: true, fullName: 'Andrey', status: 'I`m fine', location: { country: 'Russia', city: 'Belgorod' }, avatar: 'https://www.meme-arsenal.com/memes/005754c81977199be7a2fb68c8f48107.jpg' },
    { id: 2, followed: false, fullName: 'Nika', status: 'I`m fine', location: { country: 'Russia', city: 'Belgorod' }, avatar: 'https://www.meme-arsenal.com/memes/005754c81977199be7a2fb68c8f48107.jpg' },
    { id: 3, followed: true, fullName: 'Kirill', status: 'I`m fine', location: { country: 'Russia', city: 'Belgorod' }, avatar: 'https://www.meme-arsenal.com/memes/005754c81977199be7a2fb68c8f48107.jpg' },
  ],
};

const UsersReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case "FOLLOW":
      stateCopy = {
        ...state,
      };
      if (action.followedText == 'follow') {
        alert('Подпишись')
      } else {
        alert('Отпишись')
      }







      return state;
    default:
      return state;
  }
}

export default UsersReducer;