// imports from vendors
import { createReducer } from 'redux-act';

// imports from utils
import { requestAction, successAction, failureAction, cleanupAction } from '../utils/redux';
import { coreApiUrl } from '../utils/urls';
import httpClient from '../utils/httpClient';

const MODULE_NAME_ROOT = 'AUTHENTICATION';
export const AUTH_REQUEST = requestAction(MODULE_NAME_ROOT);
export const AUTH_SUCCESS = successAction(MODULE_NAME_ROOT);
export const AUTH_FAILURE = failureAction(MODULE_NAME_ROOT);
export const AUTH_CLEANUP = cleanupAction(MODULE_NAME_ROOT);

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
    [AUTH_CLEANUP]: () => initialState,
  },
  initialState,
);

export const authenticate = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return httpClient
    .post(coreApiUrl('/auth/authenticate'), { email, password })
    .then(({ data }) => {
      dispatch({ type: AUTH_SUCCESS, payload: { token: data.token } });
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      return data;
    })
    .catch(({ error }) => {
      dispatch({ type: AUTH_FAILURE, payload: { error } });
      throw error;
    });
};

export const destroyAuth = () => (dispatch) => {
  delete httpClient.defaults.headers.common['Authorization'];
  dispatch({ type: AUTH_CLEANUP });
};
