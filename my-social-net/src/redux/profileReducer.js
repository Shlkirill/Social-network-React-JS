import { apiEditProfile, apiGetFollowUser, apiGetStatus, apiSetProfile, apitogglefollowUser, apiUpdateStatus, apiUploadAvatar } from "../api/api"
import { stopSubmit } from "redux-form"

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
export const setUserProfileAC = (userProfile) => {
  return {
    type: "SET_USER_PROFILE",
    userProfile
  }
}
export const setFollowedUserAC = (followed) => {
  return {
    type: "SET_FOLLOWED_USER",
    followed
  }
}
export const followingInProgressAC = (value) => {
  return {
    type: 'FOLLOWING_IN_PROGRESS',
    value,
  }
}
export const setStatusAC = (status) => {
  return {
    type: 'SET_STATUS',
    status,
  }
}
export const uploadAnAvatarAC = (photo) => {
  return {
    type: 'UPLOAD_AVATAR',
    photo
  }
}
export const uploadProfileInfo = (dataInfo) => {
  return {
    type: 'UPLOAD_PROFILE_INFO',
    dataInfo
  }
}

let initialState = {
  posts: [
    { id: 1, text: 'Hello! How are you?', likes: 3, likeClick: 0 },
    { id: 2, text: 'My name is Kirill!', likes: 8, likeClick: 0 },
    { id: 3, text: 'Good life', likes: 5, likeClick: 0 }
  ],
  profile: null,
  followed: null,
  followingInProgress: false,
  status: "",

};

const profileReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case "SET_USER_PROFILE":
      stateCopy = {
        ...state,
        profile: action.userProfile,
      };
      return stateCopy;
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
      console.log(action.clickPost.text)
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
    case "SET_FOLLOWED_USER":
      stateCopy = {
        ...state,
        followed: action.followed,
      };
      return stateCopy;
    case 'FOLLOWING_IN_PROGRESS':
      stateCopy = {
        ...state,
        followingInProgress: action.value
      }
      return stateCopy;
    case 'SET_STATUS':
      stateCopy = {
        ...state,
        status: action.status
      }
      return stateCopy;
    case 'UPLOAD_AVATAR':
      stateCopy = {
        ...state,
        profile: { ...state.profile, photos: action.photo }

      }
      return stateCopy;
    case 'UPLOAD_PROFILE_INFO':
      stateCopy = {
        ...state,
      }
      return stateCopy
    default:
      return state;
  }
}

export const setProfileTC = (userId) => async (dispatch) => {
  let response = await apiSetProfile(userId)
  if (response != undefined) {
    dispatch(setUserProfileAC(response))
  }
}

export const getFollowUserTC = (userId) => async (dispatch) => {
  let response = await apiGetFollowUser(userId);
  dispatch(setFollowedUserAC(response));
}

export const togglefollowUserTC = (id, followed) => async (dispatch) => {
  dispatch(followingInProgressAC(true));
  debugger;
  let response = await apitogglefollowUser(id, followed);
  if (response.status === 200) {
    dispatch(setFollowedUserAC(!followed));
    dispatch(followingInProgressAC(false));
  }
};

export const getUserStatusTC = (userId) => async (dispatch) => {
  let response = await apiGetStatus(userId);
  if (response.status === 200) {
    dispatch(setStatusAC(response.data))
  }
}

export const getUpdateSatusTC = (status) => async () => {
  apiUpdateStatus(status);
}

export const putAvatarToServerTC = (photo) => async (dispatch) => {
  let response = await apiUploadAvatar(photo);
  dispatch(uploadAnAvatarAC(response.data.data.photos))
}

export const putProfileInfoTC = (dataInfo) => async (dispatch) => {
  let response = await apiEditProfile(dataInfo);
  console.log(response);
  if (response.data.resultCode === 0) {
    alert('Успешно отредактировано')
  } else {
    dispatch(stopSubmit('editMode', { _error: response.data.messages[0] }))
    alert('Не все поля заполнены') 
  }
}

  export default profileReducer;