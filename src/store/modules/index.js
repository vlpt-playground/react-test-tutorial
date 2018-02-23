import { combineReducers } from 'redux';
import counter from './counter';
import names from './names';
import post from './post';

export default combineReducers({
  counter,
  names,
  post
})