// imports from vendors
import { createReducer } from 'redux-act';

// imports from utils
import httpClient from '../utils/httpClient';
import { coreApiUrl } from '../utils/urls';
import {
  collectionRequest,
  collectionSuccess,
  collectionFailure,
  collectionCleanup,
  requestAction,
  successAction,
  failureAction,
  cleanupAction,
} from '../utils/redux';

const MODULE_NAME_ROOT = 'TESTS';
const REQUEST = requestAction(MODULE_NAME_ROOT);
const SUCCESS = successAction(MODULE_NAME_ROOT);
const FAILURE = failureAction(MODULE_NAME_ROOT);
const CLEANUP = cleanupAction(MODULE_NAME_ROOT);

const initialState = {
  isLoading: false,
  items: [],
  error: null,
};

export default createReducer(
  {
    ...collectionRequest(MODULE_NAME_ROOT),
    ...collectionSuccess(MODULE_NAME_ROOT),
    ...collectionFailure(MODULE_NAME_ROOT),
    ...collectionCleanup(MODULE_NAME_ROOT, initialState),
  },
  initialState,
);

export const cleanupTests = () => ({ type: CLEANUP });

export const getTests = () => (dispatch) => {
  dispatch({ type: REQUEST });

  return httpClient
    .post(coreApiUrl('/tests/list-test'))
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: { items: data } });
    })
    .catch(({ error }) => {
      dispatch({ type: FAILURE, payload: { error } });
      throw error;
    });
};
