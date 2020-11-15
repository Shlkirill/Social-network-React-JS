import { authorizationTC } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

type initializedActionType = {
  type: typeof SET_INITIALIZED;
}

export const initializedAC = (): initializedActionType => {
  return {
    type: SET_INITIALIZED,
  }
}

export type initialStateType = {
  initialized: boolean;
}

let initialState: initialStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: initializedActionType): initialStateType => {
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

export const initializeAppTC = () => async (dispatch: any) => {
  await dispatch(authorizationTC());
  dispatch(initializedAC());
};


export default appReducer;