// auth.js

import { TEST, UPDATE, UN_UPDATE } from './types';

export const sendMessage = message => {
  return {
    type: TEST,
    message: message
  }
}

export const updateDrawer = update => {
  return {
    type: UPDATE,
    update: update
  }
}
