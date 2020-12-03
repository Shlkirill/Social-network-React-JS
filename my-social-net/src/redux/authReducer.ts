import { apiAuth, apiCaptcha, apiLogin, apiLogout, AuthMeType, ResultCodesEnum } from "../api/api";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CAPTCHA = 'SET_CAPTCHA';
const SET_LOGIN = 'SET_LOGIN';

type dataUserType = {
  id: number,
  login: string,
  email: string
}

type setUserActionType = {
  type: typeof SET_USER_DATA,
  data: dataUserType | null,
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

type authReducedActuonType = setUserActionType | toggleIfFetchingActionType | setCaptchaActionType | setLoginActionType;

export const setUserDataAC = (data:dataUserType | null, isAuth:boolean):setUserActionType => {
  return {
    type: SET_USER_DATA,
    data,
    isAuth
  }
}
export const toggleIfFetchingAC = (isFetching:boolean): toggleIfFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}
export const setCaptchaAC = (url:string): setCaptchaActionType => {
  return {
    type: SET_CAPTCHA,
    url
  }
}
export const setLoginAC = (login:string, password:number, remember:boolean): setLoginActionType => {
  return {
    type: SET_LOGIN,
    login,
    password,
    remember
  }
}

export type initalStateAuthType = {
  email: string | null,
  id: number | null,
  login: string | null,
  isFetching: boolean,
  isAuth: boolean,
  captchaUrl: string | null
}

let initialState: initalStateAuthType = {
  email: null,
  id: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
};

const AuthReducer = (state = initialState, action: authReducedActuonType): initalStateAuthType => {
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


type ThunkUsersType = ThunkAction<void, AppStateType, unknown, authReducedActuonType>;

export type FormDataType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: boolean
}

export const authorizationTC = ():ThunkUsersType => async (dispatch) => {
  let response = await apiAuth()
  if (response.resultCode === ResultCodesEnum.Success) {
    dispatch(setUserDataAC(response.data, true));
  };
};


export const accountLoginTC = (objData: FormDataType):ThunkUsersType => async (dispatch) => {
  try {
    let response = await apiLogin(objData);

    if (response.data.resultCode === 0) {
      dispatch(authorizationTC());
      alert('Вы вошли')
    } else {
      if (response.data.resultCode === 10) {
        let response = await apiCaptcha();
        dispatch(setCaptchaAC(response.url))
      }
      //@ts-ignore
      dispatch(stopSubmit('login', { _error: response.data.messages[0] }))
    }
  } catch (err) {
    //@ts-ignore
    dispatch(stopSubmit('login', { _error: 'server error' }))
  }
}

export const logoutAccountTC = ():ThunkUsersType => async (dispatch) => {
  let response = await apiLogout();
  if (response.data.resultCode === 0) {
    dispatch(setUserDataAC(null, false));
    alert('Вы вышли')
  }
}



export default AuthReducer;