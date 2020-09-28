// import from vendors
import { combineReducers } from 'redux';

// imports from modules
import auth from './modules/auth';
import self from './modules/self';

export default combineReducers({
  auth,
  self,
});
