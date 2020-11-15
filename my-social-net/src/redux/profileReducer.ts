import { apiEditProfile, apiGetFollowUser, apiGetStatus, apiSetProfile, apitogglefollowUser, apiUpdateStatus, apiUploadAvatar } from "../api/api"
import { stopSubmit } from "redux-form"

const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_FOLLOWED_USER = 'SET_FOLLOWED_USER';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
const SET_STATUS = 'SET_STATUS';
const UPLOAD_AVATAR = 'UPLOAD_AVATAR';
const UPLOAD_PROFILE_INFO = 'UPLOAD_PROFILE_INFO';

type addPostActionType = {
  type: typeof ADD_POST,
  text: string
}
type addLikeActionType = {
  type: typeof ADD_LIKE,
  clickPost: string
}
type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  userProfile: string
}
type setFollowedUserActionType = {
  type: typeof SET_FOLLOWED_USER,
  followed: boolean
}
type followingInProgressActionType = {
  type: typeof FOLLOWING_IN_PROGRESS,
  value: boolean
}
type setStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}
type uploadAnAvatarActionType = {
  type: typeof UPLOAD_AVATAR,
  photo: string
}
type uploadProfileInfoActionType = {
  type: typeof UPLOAD_PROFILE_INFO,
  dataInfo: string
}

export const addPostActionCreator = (text: string): addPostActionType => {
  return {
    type: ADD_POST,
    text,
  }
}
export const addLikeActionCreator = (clickPost: string): addLikeActionType => {
  return {
    type: ADD_LIKE,
    clickPost,
  }
}
export const setUserProfileAC = (userProfile: string): setUserProfileActionType => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
}
export const setFollowedUserAC = (followed: boolean): setFollowedUserActionType => {
  return {
    type: SET_FOLLOWED_USER,
    followed
  }
}
export const followingInProgressAC = (value: boolean): followingInProgressActionType => {
  return {
    type: FOLLOWING_IN_PROGRESS,
    value,
  }
}
export const setStatusAC = (status: string): setStatusActionType => {
  return {
    type: SET_STATUS,
    status,
  }
}
export const uploadAnAvatarAC = (photo: string): uploadAnAvatarActionType => {
  return {
    type: UPLOAD_AVATAR,
    photo
  }
}
export const uploadProfileInfo = (dataInfo: string): uploadProfileInfoActionType => {
  return {
    type: UPLOAD_PROFILE_INFO,
    dataInfo
  }
}

type postType = {
  id: number,
  text: string,
  likes: number,
  likeClick: number,
}
type contactProfileType = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string
}

export type photosProfileType = {
  small: string,
  large: string,
}

type profileType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: contactProfileType,
  photos: photosProfileType
}

type initialStateType = typeof initialState;

let initialState = {
  posts: [
    { id: 1, text: 'Hello! How are you?', likes: 3, likeClick: 0 },
    { id: 2, text: 'My name is Kirill!', likes: 8, likeClick: 0 },
    { id: 3, text: 'Good life', likes: 5, likeClick: 0 }
  ] as Array<postType>,
  profile: null as profileType | null,
  followed: null as boolean | null,
  followingInProgress: false as boolean,
  status: "",

};

const profileReducer = (state = initialState, action: any): initialStateType => {
  let stateCopy;

  switch (action.type) {
    case SET_USER_PROFILE:
      stateCopy = {
        ...state,
        profile: action.userProfile,
      };
      return stateCopy;
    case ADD_POST:
      stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      let newId = stateCopy.posts.length + 1;
      let newLikes = 0;
      let newPost = {
        id: newId,
        text: action.text,
        likes: newLikes,
        likeClick: 0
      };
      stateCopy.posts.push(newPost);
      return stateCopy;
    case ADD_LIKE:
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
    case SET_FOLLOWED_USER:
      stateCopy = {
        ...state,
        followed: action.followed,
      };
      return stateCopy;
    case FOLLOWING_IN_PROGRESS:
      stateCopy = {
        ...state,
        followingInProgress: action.value
      }
      return stateCopy;
    case SET_STATUS:
      stateCopy = {
        ...state,
        status: action.status
      }
      return stateCopy;
    case UPLOAD_AVATAR:
      stateCopy = {
        ...state,
        profile: { ...state.profile, photos: action.photo } as profileType

      }
      return stateCopy;
    case UPLOAD_PROFILE_INFO:
      stateCopy = {
        ...state,
      }
      return stateCopy
    default:
      return state;
  }
}

export const setProfileTC = (userId: number) => async (dispatch: any) => {
  let response = await apiSetProfile(userId)
  if (response != undefined) {
    dispatch(setUserProfileAC(response))
  }
}

export const getFollowUserTC = (userId: number) => async (dispatch: any) => {
  let response = await apiGetFollowUser(userId);
  dispatch(setFollowedUserAC(response));
}

export const togglefollowUserTC = (id: number, followed:boolean) => async (dispatch: any) => {
  dispatch(followingInProgressAC(true));
  let response = await apitogglefollowUser(id, followed);
  if (response.status === 200) {
    dispatch(setFollowedUserAC(!followed));
    dispatch(followingInProgressAC(false));
  }
};

export const getUserStatusTC = (userId: number) => async (dispatch: any) => {
  let response = await apiGetStatus(userId);
  if (response.status === 200) {
    dispatch(setStatusAC(response.data))
  }
}

export const getUpdateSatusTC = (status: string) => async () => {
  apiUpdateStatus(status);
}

export const putAvatarToServerTC = (photo: string) => async (dispatch: any) => {
  let response = await apiUploadAvatar(photo);
  dispatch(uploadAnAvatarAC(response.data.data.photos))
}

export const putProfileInfoTC = (dataInfo: string) => async (dispatch: any) => {
  let response = await apiEditProfile(dataInfo);
  if (response.data.resultCode === 0) {
    alert('Успешно отредактировано')
  } else {
    dispatch(stopSubmit('editMode', { _error: response.data.messages[0] }))
    alert('Не все поля заполнены')
  }
}

export default profileReducer;