import _ from 'lodash/fp';

// imports from constants
import {
  ACTION_SUFFIX_SUCCESS,
  ACTION_SUFFIX_REQUEST,
  ACTION_SUFFIX_FAILURE,
  ACTION_SUFFIX_CLEANUP,
  ACTION_SUFFIX_REPLACE,
  ACTION_SUFFIX_CHANGE,
  ACTION_SUFFIX_CHANGE_ORDER_BY,
  ACTION_SUFFIX_CHANGE_SORT_BY,
  ACTION_SUFFIX_PATCH_COLLECTION,
  ACTION_SUFFIX_APPEND_TO_COLLECTION,
  ACTION_SUFFIX_FILTER_COLLECTION,
} from '../constants/redux';

export const actionFactory = (suffix: string) => (moduleName: string) => {
  if (!_.isString(suffix) || !suffix) {
    throw new TypeError('Suffix is missing');
  }

  if (!_.isString(moduleName) || !moduleName) {
    throw new TypeError('Module name is missing');
  }

  return `${moduleName}/${suffix}`;
};

/**
 * Factory that creates action for a module with ACTION_SUFFIX_REQUEST suffix
 * @param {String} moduleName
 * @return {String}
 */
export const requestAction = actionFactory(ACTION_SUFFIX_REQUEST);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_SUCCESS suffix
 * @param {String} moduleName
 * @return {String}
 */
export const successAction = actionFactory(ACTION_SUFFIX_SUCCESS);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_FAILURE suffix
 * @param {String} moduleName
 * @return {String}
 */
export const failureAction = actionFactory(ACTION_SUFFIX_FAILURE);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_CLEANUP suffix
 * @param {String} moduleName
 * @return {String}
 */
export const cleanupAction = actionFactory(ACTION_SUFFIX_CLEANUP);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_REPLACE suffix
 * @param {String} moduleName
 * @return {String}
 */
export const replaceAction = actionFactory(ACTION_SUFFIX_REPLACE);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_CHANGE suffix
 * @param {String} moduleName
 * @return {String}
 */
export const changeAction = actionFactory(ACTION_SUFFIX_CHANGE);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_CHANGE_ORDER_BY suffix
 * @param {String} moduleName
 * @return {String}
 */
export const orderByAction = actionFactory(ACTION_SUFFIX_CHANGE_ORDER_BY);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_CHANGE_SORT_BY suffix
 * @param {String} moduleName
 * @return {String}
 */
export const sortByAction = actionFactory(ACTION_SUFFIX_CHANGE_SORT_BY);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_PATCH_COLLECTION suffix
 * @param {String} moduleName
 * @return {String}
 */
export const patchCollectionAction = actionFactory(ACTION_SUFFIX_PATCH_COLLECTION);

/**
 * Factory that creates action for a module with ACTION_APPEND_TO_COLLECTION suffix
 * @param {String} moduleName
 * @return {String}
 */
export const appendToCollectionAction = actionFactory(ACTION_SUFFIX_APPEND_TO_COLLECTION);

/**
 * Factory that creates action for a module with ACTION_SUFFIX_FILTER_COLLECTION suffix
 * @param {String} moduleName
 * @return {String}
 */
export const filterCollectionAction = actionFactory(ACTION_SUFFIX_FILTER_COLLECTION);

export const singleItemRequest = (moduleName: string) => ({
  [requestAction(moduleName)]: (state: any) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
});

export const singleItemSuccess = (moduleName: string) => ({
  [successAction(moduleName)]: (state: any, { item }: { item: any }) => ({
    ...state,
    isLoading: false,
    isExecuted: true,
    error: null,
    item,
  }),
});

export const singleItemFailure = (moduleName: string) => ({
  [failureAction(moduleName)]: (state: any, { error }: { error: any }) => ({
    ...state,
    isLoading: false,
    isExecuted: true,
    error,
  }),
});

export const singleItemCleanup = (moduleName: string, initialState: any) => ({
  [cleanupAction(moduleName)]: () => initialState,
});

export const singleItemReplace = (moduleName: string) => ({
  [replaceAction(moduleName)]: (state: any, { item }: { item: any }) => ({
    ...state,
    item,
  }),
});

export const noContentRequest = (moduleName: string) => ({
  [requestAction(moduleName)]: (state: any) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
});

export const noContentSuccess = (moduleName: string) => ({
  [successAction(moduleName)]: (state: any) => ({
    ...state,
    isLoading: false,
    isExecuted: true,
    error: null,
    success: true,
  }),
});

export const noContentFailure = (moduleName: string) => ({
  [failureAction(moduleName)]: (state: any, { error }: { error: any }) => ({
    ...state,
    success: false,
    isLoading: false,
    isExecuted: true,
    error,
  }),
});

export const noContentCleanup = (moduleName: string, initialState: any) => ({
  [cleanupAction(moduleName)]: () => initialState,
});

export const collectionRequest = (moduleName: string) => ({
  [requestAction(moduleName)]: (state: any) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
});

export const collectionSuccess = (moduleName: string) => ({
  [successAction(moduleName)]: (state: any, payload: any) => ({
    ...state,
    isLoading: false,
    isExecuted: true,
    error: null,
    ...payload,
  }),
});

export const collectionFailure = (moduleName: string) => ({
  [failureAction(moduleName)]: (state: any, { error }: { error: any }) => ({
    ...state,
    isLoading: false,
    isExecuted: true,
    error,
  }),
});

export const collectionCleanup = (moduleName: string, initialState: any) => ({
  [cleanupAction(moduleName)]: () => initialState,
});
