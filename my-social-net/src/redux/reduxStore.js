import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  allUsers: usersReducer,
});


let store = createStore(reducers);

export default store;