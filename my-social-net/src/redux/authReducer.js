export const setUserDataAC = (data) => {
  return {
    type: "SET_USER_DATA",
    data,
  }
}
export const toogleIfFetchingAC = (isFetching) => {
  return {
    type: 'TOOGLE_IS_FETCHING',
    isFetching
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
        isAuth: true,
      };
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

export default AuthReducer;