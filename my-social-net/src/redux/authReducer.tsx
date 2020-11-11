import { apiAuth, apiCaptcha, apiLogin, apiLogout } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CAPTCHA = 'SET_CAPTCHA';
const SET_LOGIN = 'SET_LOGIN';

type setUserActionType = {
  type: typeof SET_USER_DATA,
  data: string,
  isAuth: boolean
}
type toggleIfFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean
}
type setCaptchaActionType = {
  type: typeof SET_CAPTCHA,
  url: string
}
type setLoginActionType = {
  type: typeof SET_LOGIN,
  login: string,
  password: number,
  remember: boolean
}

export const setUserDataAC = (data, isAuth) => {
  return {
    type: SET_USER_DATA,
    data,
    isAuth
  }
}
export const toggleIfFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}
export const setCaptchaAC = (url) => {
  return {
    type: SET_CAPTCHA,
    url
  }
}
export const setLoginAC = (login, password, remember) => {
  return {
    type: SET_LOGIN,
    login,
    password,
    remember
  }
}

type initalStateType = {
  email: string | null,
  id: number | null,
  login: string | null,
  isFetching: boolean,
  isAuth: boolean,
  captchaUrl: boolean | null
}

let initialState: initalStateType = {
  email: null,
  id: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
};

const AuthReducer = (state = initialState, action): initalStateType => {
  let stateCopy;

  switch (action.type) {
    case "SET_USER_DATA":
      stateCopy = {
        ...state,
        ...action.data,
        isAuth: action.isAuth
      };
      return stateCopy;
    case 'TOGGLE_IS_FETCHING':
      stateCopy = {
        ...state,
        isFetching: action.isFetching
      }
      return stateCopy;
    case 'SET_LOGIN':
      stateCopy = {
        ...state,
      };
      return stateCopy;
    case 'SET_CAPTCHA':
      stateCopy = {
        ...state,
        captchaUrl: action.url
      };
      console.log(stateCopy);
      return stateCopy;
    default:
      return state;
  }
}

export const authorizationTC = () => async (dispatch:any) => {
  let response = await apiAuth()
  if (response.resultCode === 0) {
    dispatch(setUserDataAC(response.data, true));
  };
};


export const accountLoginTC = (objData:any) => async (dispatch:any) => {
  debugger;
  try {
    let response = await apiLogin(objData);

    if (response.data.resultCode === 0) {
      dispatch(authorizationTC());
      alert('Вы вошли')
    } else {
      if (response.data.resultCode === 10) {
        let response2 = await apiCaptcha();
        dispatch(setCaptchaAC(response2.url))
      }
      dispatch(stopSubmit('login', { _error: response.data.messages[0] }))
    }
  } catch (err) {
    dispatch(stopSubmit('login', { _error: 'server error' }))
  }
}

export const logoutAccountTC = () => async (dispatch:any) => {
  let response = await apiLogout();
  if (response.data.resultCode === 0) {
    dispatch(setUserDataAC(null, false));
    alert('Вы вышли')
  }
}



export default AuthReducer;