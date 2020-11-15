import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {reducer as formReducer, reducer} from 'redux-form';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer.ts';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;