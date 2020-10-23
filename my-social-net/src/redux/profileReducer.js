import { apiFollowUser, apiGetFollowUser, apiGetStatus, apiSetProfile, apiUnfollowUser, apiUpdateStatus } from "../api/api"

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
    default:
      return state;
  }
}

export const setProfileTC = (userId) => {
  return (dispatch) => {
    apiSetProfile(userId).then((response) => {
      dispatch(setUserProfileAC(response))
    });
  }
}

export const getFollowUserTC = (userId) => {
  return (dispatch) => {
    apiGetFollowUser(userId).then((responce) => {
      dispatch(setFollowedUserAC(responce));
    })
  }
}

export const followUserTC = (userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true));
    apiFollowUser(userId).then(() => {
      dispatch(setFollowedUserAC(true));
      dispatch(followingInProgressAC(false));
    });
  }
}

export const unFollowUserTC = (userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true));
    apiUnfollowUser(userId).then(() => {
      dispatch(setFollowedUserAC(false));
      dispatch(followingInProgressAC(false));
    });
  }
}

export const getUserStatusTC = (userId) => {
  return (dispatch) => {
    apiGetStatus(userId).then((response) => {
      dispatch(setStatusAC(response.data))
    })
  }
}

export const getUpdateSatusTC = (status) => {
  return (dispatch) => {

    apiUpdateStatus(status).then((response) => {
    })
  }
}


export default profileReducer;