// imports from vendors
import { createReducer } from 'redux-act';
import AsyncStorage from '@react-native-community/async-storage';

// imports from utils
import {
  requestAction,
  successAction,
  failureAction,
  cleanupAction,
  replaceAction,
} from '../utils/redux';
import { coreApiUrl } from '../utils/urls';
import httpClient from '../utils/httpClient';

const MODULE_NAME_ROOT = 'AUTHENTICATION';
export const AUTH_REQUEST = requestAction(MODULE_NAME_ROOT);
export const AUTH_SUCCESS = successAction(MODULE_NAME_ROOT);
export const AUTH_FAILURE = failureAction(MODULE_NAME_ROOT);
export const AUTH_CLEANUP = cleanupAction(MODULE_NAME_ROOT);
export const AUTH_REPLACE = replaceAction(MODULE_NAME_ROOT);

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  error: null,
};

export default createReducer(
  {
    [AUTH_REQUEST]: (state) => ({ ...state, isLoading: true, error: null }),
    [AUTH_SUCCESS]: (state, { token }) => ({
      ...state,
      token,
      isLoading: false,
      isAuthenticated: true,
      error: null,
    }),
    [AUTH_FAILURE]: (state, { error }) => ({ ...state, isLoading: false, error }),
    [AUTH_REPLACE]: (state, { token }) => ({
      ...initialState,
      isAuthenticated: true,
      token,
    }),
    [AUTH_CLEANUP]: () => initialState,
  },
  initialState,
);

export const cleanupAuth = () => ({ type: AUTH_CLEANUP });

export const authenticate = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return httpClient
    .post(coreApiUrl('/auth/authenticate'), { email, password })
    .then(async ({ data }) => {
      dispatch({ type: AUTH_SUCCESS, payload: { token: data.token } });
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      await AsyncStorage.setItem('token', data.token);
      return data;
    })
    .catch(({ error }) => {
      dispatch({ type: AUTH_FAILURE, payload: { error } });
    });
};

export const replaceAuth = (token) => async (dispatch) => {
  dispatch({ type: AUTH_REPLACE, payload: { token } });
  httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  await AsyncStorage.setItem('token', token);
};

export const destroyAuth = () => async (dispatch) => {
  delete httpClient.defaults.headers.common['Authorization'];
  await AsyncStorage.removeItem('token');
  dispatch(cleanupAuth());
};
