import { createStore, combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  allUsers: usersReducer,
  auth: authReducer,
  form: formReducer,
  appInitial : appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;