import { ThunkAction } from "redux-thunk";
import { apiGetUsers, apitogglefollowUser } from "../api/api"
import { AppStateType } from "./reduxStore";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USER';
const SET_PAGE = 'SET_PAGE';
const SET_COUNT_USERS = 'SET_COUNT_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

type toogleFollowTActionType = {
  type: typeof TOGGLE_FOLLOW,
  id: number,
  followed: boolean
}
type setUsersActionType = {
  type: typeof SET_USERS,
  users: Array<usersType>,
  totalCount: number
}
type setPageActionType = {
  type: typeof SET_PAGE,
  clickPage: number
}
type setCountUsersActionType = {
  type: typeof SET_COUNT_USERS,
  count: number
}
type toggleIfFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean
}
type followingInProgressActionType = {
  type: typeof FOLLOWING_IN_PROGRESS,
  id: number,
  value: boolean

}
type ActionUsersTypes = any


const actions = {
  toggleFollowAC: (id: number, followed: boolean) => ({ type: TOGGLE_FOLLOW, id, followed }),
  setUsersAC: (users: Array<usersType>, totalCount: number) => ({ type: SET_USERS, users, totalCount }),
  setPageAC: (clickPage: number) => ({ type: SET_PAGE, clickPage }),
  setCountUsersAC: (count: number) => ({ type: SET_COUNT_USERS, count }),
  toggleIfFetchingAC: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching }),
  followingInProgressAC: (id: number, value: boolean) => ({ type: FOLLOWING_IN_PROGRESS, id, value }),
}

export type usersType = {
  followed: boolean,
  id: number,
  name: string,
  photos: { small: string | null, large: string | null }
  status: null | string
  uniqueUrlName: string | null
}

type initialStateType = typeof initialState;

let initialState = {
  users: [] as Array<usersType>,
  pageSize: 10,
  totalUsersCount: 0,
  activePage: 1,
  isFetching: false,
  followingInProgress: [] as Array<usersType>,
};

const UsersReducer = (state = initialState, action: ActionUsersTypes): initialStateType => {
  let stateCopy;

  switch (action.type) {
    case TOGGLE_FOLLOW:
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
    case FOLLOWING_IN_PROGRESS:
      let arr;
      if (action.value == false) {
        arr = state.followingInProgress.filter((item) => {
          //@ts-ignore
          return item != action.id
        })
      } else {
        arr = [...state.followingInProgress, action.id]
      }
      stateCopy = {
        ...state,
        followingInProgress: arr,
      }
      //@ts-ignore
      return stateCopy;
    case SET_USERS:
      stateCopy = {
        ...state,
        users: action.users,
        totalUsersCount: action.totalCount,
      }
      //@ts-ignore
      return stateCopy;
    case SET_PAGE:
      stateCopy = {
        ...state,
        activePage: action.clickPage,
      }
      return stateCopy;
    case SET_COUNT_USERS:
      stateCopy = {
        ...state,
        pageSize: action.count,
      }
      return stateCopy;
    case TOGGLE_IS_FETCHING:
      stateCopy = {
        ...state,
        isFetching: action.isFetching
      }
      return stateCopy;
    default:
      return state;
  }
}

type ThunkUsersType = ThunkAction<void, AppStateType, unknown, ActionUsersTypes>


export const getUsersTC = (pageSize: number, activePage: number): ThunkUsersType => {
  return (
    async (dispatch) => {
      dispatch(actions.toggleIfFetchingAC(true));
      let response = await apiGetUsers(pageSize, activePage);
      dispatch(actions.setUsersAC(response.items, response.totalCount));
      dispatch(actions.toggleIfFetchingAC(false));
    }
  )
}

export const getActivePageTC = (pageSize: number, page: number): ThunkUsersType =>
  (dispatch) => {
    dispatch(actions.setPageAC(page));
    dispatch(getUsersTC(pageSize, page));
  };

export const setCountUserTC = (value: number, activePage: number): ThunkUsersType =>
  (dispatch) => {
    dispatch(actions.setCountUsersAC(value));
    dispatch(getUsersTC(value, activePage));
  };

export const togglefollowUserTC = (id: number, followed: boolean): ThunkUsersType =>
  async (dispatch) => {
    dispatch(actions.followingInProgressAC(id, true));
    let response = await apitogglefollowUser(id, followed);
    if (response.status === 200) {
      dispatch(actions.toggleFollowAC(id, followed));
      dispatch(actions.followingInProgressAC(id, false));
    }
  };

export default UsersReducer;