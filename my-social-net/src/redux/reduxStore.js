import { createStore, combineReducers } from 'redux';
import profileReducer from '../profileReducer';
import friendsReducer from '../friendsReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;