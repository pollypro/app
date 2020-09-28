// imports from vendors
import { createReducer } from 'redux-act';

// imports from utils
import httpClient from '../utils/httpClient';
import { coreApiUrl } from '../utils/urls';
import {
  singleItemRequest,
  singleItemSuccess,
  singleItemFailure,
  singleItemCleanup,
  requestAction,
  successAction,
  failureAction,
  cleanupAction,
} from '../utils/redux';

const MODULE_NAME_ROOT = 'SELF';
const REQUEST = requestAction(MODULE_NAME_ROOT);
const SUCCESS = successAction(MODULE_NAME_ROOT);
const FAILURE = failureAction(MODULE_NAME_ROOT);
const CLEANUP = cleanupAction(MODULE_NAME_ROOT);

const initialState = {
  isLoading: false,
  item: null,
  error: null,
};

export default createReducer(
  {
    ...singleItemRequest(MODULE_NAME_ROOT),
    ...singleItemSuccess(MODULE_NAME_ROOT),
    ...singleItemFailure(MODULE_NAME_ROOT),
    ...singleItemCleanup(MODULE_NAME_ROOT, initialState),
  },
  initialState,
);

export const cleanupSelf = () => ({ type: CLEANUP });

export const getSelf = () => (dispatch) => {
  dispatch({ type: REQUEST });

  return httpClient
    .post(coreApiUrl('/users/get-self'))
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: { item: data } });
    })
    .catch(({ error }) => {
      dispatch({ type: FAILURE, payload: { error } });
      throw error;
    });
};
