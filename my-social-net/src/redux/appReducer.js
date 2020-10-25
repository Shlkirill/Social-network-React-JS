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

export const initializeAppTC = () => async (dispatch) => {
  await dispatch(authorizationTC());
  dispatch(initializedAC());
};


export default appReducer;