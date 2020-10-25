import { apiAuth, apiLogin, apiLogout } from "../api/api";
import { stopSubmit } from "redux-form";
import { wait } from "@testing-library/react";

export const setUserDataAC = (data, isAuth) => {
  return {
    type: "SET_USER_DATA",
    data,
    isAuth
  }
}
export const toggleIfFetchingAC = (isFetching) => {
  return {
    type: 'TOGGLE_IS_FETCHING',
    isFetching
  }
}
export const setLoginAC = (login, password, remember) => {
  return {
    type: 'SET_LOGIN',
    login,
    password,
    remember
  }
}

let initialState = {
  email: null,
  id: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case "SET_USER_DATA":
      stateCopy = {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
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
    default:
      return state;
  }
}

export const authorizationTC = () => async (dispatch) => {
  let response = await apiAuth()
  if (response.resultCode === 0) {
    dispatch(setUserDataAC(response.data, true));
  };
};


export const accountLoginTC = (objData) => async (dispatch) => {
  let response = await apiLogin(objData);

  if (response.data.resultCode === 0) {
    dispatch(authorizationTC());
    alert('Вы вошли')
  } else {
    dispatch(stopSubmit('login', { _error: response.data.messages[0] }))
  }
}

export const logoutAccountTC = () => async (dispatch) => {
  let response = await apiLogout();
  if (response.data.resultCode === 0) {
    dispatch(setUserDataAC(null, false));
    alert('Вы вышли')
  }
}



export default AuthReducer;