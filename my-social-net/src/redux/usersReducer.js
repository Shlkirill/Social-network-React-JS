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
export const setMoreUsersAC = (oldPageSize) => {
  return {
    type: 'SET_MORE_USERS',
    oldPageSize
  }
}

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  activePage: 1,
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
          (action.followed == 'follow') ? k.followed = false : k.followed = true;
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
    case 'SET_MORE_USERS':
      let newPageSize = (action.oldPageSize < 100)? action.oldPageSize + 10:100;
      if (newPageSize == 100) {
        alert("Показано 100 человек, больше показать не могу, перейдите на следующую страницу")
      }
      stateCopy = {
        ...state,
        pageSize: newPageSize,
      }
      return stateCopy;
    default:
      return state;
  }
}

export default UsersReducer;