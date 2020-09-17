export const toogleFollowAC = (id, followed) => {
  return {
    type: "TOOGLE_FOLLOW",
    id,
    followed,
  }
}
export const setUsersAC = (users, totalCount) => {
  return {
    type: 'SET_USERS',
    users,
    totalCount,
  }
}
export const setPageAC = (clickPage) => {
  return {
    type: 'SET_PAGE',
    clickPage,
  }
}
export const setCountUsersAC = (count) => {
  return {
    type: 'SET_COUNT_USERS',
    count
  }
}
export const toogleIfFetchingAC = (isFetching) => {
  return {
    type: 'TOOGLE_IS_FETCHING',
    isFetching
  }
}
let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  activePage: 1,
  isFetching: false
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
        if (k.id == action.id) {
          (action.followed == true) ? k.followed = false : k.followed = true;
        }
      }
      return stateCopy;
    case 'SET_USERS':
      stateCopy = {
        ...state,
        users: action.users,
        totalUsersCount: action.totalCount,
      }
      return stateCopy;
    case 'SET_PAGE':
      stateCopy = {
        ...state,
        activePage: action.clickPage,
      }
      return stateCopy;
    case 'SET_COUNT_USERS':
      stateCopy = {
        ...state,
        pageSize: action.count,
      }
      return stateCopy;
    case 'TOOGLE_IS_FETCHING':
      stateCopy = {
        ...state,
        isFetching: action.isFetching
      }
      return stateCopy;
    default:
      return state;
  }
}

export default UsersReducer;