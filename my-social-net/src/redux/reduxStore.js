import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  allUsers: usersReducer,
  auth: authReducer
});


let store = createStore(reducers);

export default store;