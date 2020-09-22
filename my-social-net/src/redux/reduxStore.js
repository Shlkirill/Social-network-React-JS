import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  allUsers: usersReducer,
  auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;