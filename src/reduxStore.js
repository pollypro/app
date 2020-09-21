// imports from vendors
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

const reduxStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default reduxStore;
