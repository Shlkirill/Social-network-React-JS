import { authorizationTC } from "./authReducer";

export const initializedAC = () => {
  return {
    type: "SET_INITIALIZED",
  }
}

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case "SET_INITIALIZED":
      stateCopy = {
        ...state,
        initialized: true,
      };
      return stateCopy;
    default:
      return state;
  }
}

export const initializeAppTC = () => {
  return (dispatch) => {
    let promiseAuthorization = dispatch(authorizationTC());
    promiseAuthorization.then(() => {
      dispatch(initializedAC());
    })
    };
};


export default appReducer;