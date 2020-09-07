export const toogleFollowAC = (id,followed,target) => {
  return {
    type: "TOOGLE_FOLLOW",
    userId: id,
    followedText: followed,
    targetButton: target
  }
}
export const setUsersAC = (users) => {

  return {
    type: 'SET_USERS',
    allUsers: users,
  }
}

let initialState = {
  users: [],
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
        users: [...action.allUsers, ],
      } 
      return stateCopy;
    default:
      return state;
  }
}

export default UsersReducer;