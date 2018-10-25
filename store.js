// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';

import placeReducer from './app/reducers/placeReducer';
import authReducer from './app/reducers/authReducer';
import navigatorReducer from './app/reducers/navigatorReducer';
import {middleware} from './app/navigator/RootNavigator';

const rootReducer = combineReducers({
  auth: authReducer,
  places: placeReducer,
  nav: navigatorReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(middleware));
}

export default configureStore;