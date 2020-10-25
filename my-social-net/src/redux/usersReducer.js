import { apiFollowUser, apiGetUsers, apiUnfollowUser, apitogglefollowUser } from "../api/api"

export const toggleFollowAC = (id, followed) => {
  return {
    type: "TOGGLE_FOLLOW",
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
export const toggleIfFetchingAC = (isFetching) => {
  return {
    type: 'TOGGLE_IS_FETCHING',
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
    case "TOGGLE_FOLLOW":
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
    case 'TOGGLE_IS_FETCHING':
      stateCopy = {
        ...state,
        isFetching: action.isFetching
      }
      return stateCopy;
    default:
      return state;
  }
}

export const getUsersTC = (pageSize, activePage) => async (dispatch) => {
  dispatch(toggleIfFetchingAC(true));
  let response = await apiGetUsers(pageSize, activePage);
  dispatch(setUsersAC(response.items, response.totalCount));
  dispatch(toggleIfFetchingAC(false));
};

export const getActivePageTC = (pageSize, page) => (dispatch) => {
  dispatch(setPageAC(page));
  dispatch(getUsersTC(pageSize, page));
};

export const setCountUserTC = (value, activePage) => (dispatch) => {
  dispatch(setCountUsersAC(value));
  dispatch(getUsersTC(value, activePage));
};

export const togglefollowUserTC = (id, followed) => async (dispatch) => {
  dispatch(followingInProgressAC(id, true));
  let response = await apitogglefollowUser(id, followed);
  if (response.status === 200) {
    dispatch(toggleFollowAC(id, followed));
    dispatch(followingInProgressAC(id, false));
  }
};

export default UsersReducer;