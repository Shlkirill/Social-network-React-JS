export const toogleFollowAC = (id,followed) => {
  return {
    type: "TOOGLE_FOLLOW",
    userId: id,
    followedText: followed,
  }
}
export const setUsersAC = (users) => {
  return {
    type: 'SET_USERS',
    users: users,
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
    case "TOOGLE_FOLLOW":
      stateCopy = {
        ...state,
        users: [...state.users]
      };
      for (let k of stateCopy.users) {
        if (k.id == action.userId) {
          (action.followedText == 'follow') ? k.followed = false: k.followed = true;
        }
      }
      return stateCopy;
    case 'SET_USERS':
      stateCopy = {
        ...state,
        users: [...state.users, ],
      } 
      return stateCopy;
    default:
      return state;
  }
}

export default UsersReducer;