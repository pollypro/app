// import from vendors
import { combineReducers } from 'redux';

// imports from modules
import auth from './modules/auth';
import questions from './modules/questions';
import self from './modules/self';
import tests from './modules/tests';

export default combineReducers({
  auth,
  questions,
  self,
  tests,
});
