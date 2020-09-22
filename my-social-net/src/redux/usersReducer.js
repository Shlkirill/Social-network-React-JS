import { apiGetUsers } from "../api/api"

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
export const followingInProgressAC = (id, value) => {
  return {
    type: 'FOLLOWING_IN_PROGRESS',
    id,
    value
  }
}

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  activePage: 1,
  isFetching: false,
  followingInProgress: []
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
    case 'FOLLOWING_IN_PROGRESS':
      let arr;
      if (action.value == false) {
        arr = state.followingInProgress.filter((item) => {
          return item != action.id
        })
      } else {
        arr = [...state.followingInProgress, action.id]
      }
      stateCopy = {
        ...state,
        followingInProgress: arr,
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

export const getUsersThunkCreator = (pageSize, activePage) => {
  return (dispatch) => {
    dispatch(toogleIfFetchingAC(true));
    let handler = (response) => {
      dispatch(setUsersAC(response.items, response.totalCount));
      dispatch(toogleIfFetchingAC(false));
    };
    apiGetUsers(pageSize, activePage).then(handler);
  }
};

export const setCountUserThunkCreator = (value, activePage) => {
  return (dispatch) => {
    dispatch(setCountUsersAC(value));
    dispatch(toogleIfFetchingAC(true));
    let handler = (response) => {
      dispatch(setUsersAC(response.items, response.totalCount));
      dispatch(toogleIfFetchingAC(false));
    };
    apiGetUsers(value, activePage).then(handler);
  }
};
export default UsersReducer;