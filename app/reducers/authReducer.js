// authReducer.js

import { TEST, UPDATE } from '../actions/types';

const initialState = {
  message: '',
  updated: false,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST:
      return {
        ...state,
        message: action.message
      };
    case UPDATE:
      return {
        ...state,
        updated: action.update
      }
    default:
      return state;
  }
}

export default authReducer;