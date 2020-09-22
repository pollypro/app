// Is used for some actions that must be finished before HTTP request start.
// e.g you can set isLoading flag of a request to true.
export const ACTION_SUFFIX_REQUEST = 'REQUEST';

// Is used for event that must be run right after request is finished.
// e.g you can put data from a request's body to the redux store.
export const ACTION_SUFFIX_SUCCESS = 'SUCCESS';

// Is used for event that must be run right after request is failed.
// e.g you can put error data from a request's body to the redux store.
export const ACTION_SUFFIX_FAILURE = 'FAILURE';

// Is used for redux store clean up actions.
// e.g resetting of the redux state to initial.
export const ACTION_SUFFIX_CLEANUP = 'CLEANUP';

// Is used for force clean up.
// The same as ACTION_SUFFIX_CLEANUP, but semantically has more power.
export const ACTION_SUFFIX_DESTROY = 'DESTROY';

// It's a synonym of PUT, but is used w/o any 3rd party call.
// Should be used internal app's data.
export const ACTION_SUFFIX_REPLACE = 'REPLACE';

// Is used for some value patching.
// Internal or external data can be used.
export const ACTION_SUFFIX_PATCH = 'PATCH';

// Can be used as ACTION_SUFFIX_REPLACE or ACTION_SUFFIX_PATCH.
// It's here just because of semantics.
export const ACTION_SUFFIX_CHANGE = 'CHANGE';

// Is used for changing of list sorting events.
// e.g sort by "clinic" or "created_at"
export const ACTION_SUFFIX_CHANGE_SORT_BY = 'CHANGE_SORT_BY';

// Is used for changing of list ordering events.
// e.g order by "asc" or "desc"
export const ACTION_SUFFIX_CHANGE_ORDER_BY = 'CHANGE_ORDER_BY';

// Is used for changing of list page events.
export const ACTION_SUFFIX_CHANGE_PAGE = 'CHANGE_PAGE';

// Is used for optimistic patching of items in a collections.
export const ACTION_SUFFIX_PATCH_COLLECTION = 'PATCH_COLLECTION';

// Is used to append next page data to an existing collection.
export const ACTION_SUFFIX_APPEND_TO_COLLECTION = 'APPEND_TO_COLLECTION';

// Is used to filter a collection.
export const ACTION_SUFFIX_FILTER_COLLECTION = 'FILTER_COLLECTION';

export const ACTION_SUFFIXES = [
  ACTION_SUFFIX_FAILURE,
  ACTION_SUFFIX_REQUEST,
  ACTION_SUFFIX_SUCCESS,
  ACTION_SUFFIX_CLEANUP,
  ACTION_SUFFIX_DESTROY,
  ACTION_SUFFIX_REPLACE,
  ACTION_SUFFIX_PATCH,
  ACTION_SUFFIX_CHANGE,
  ACTION_SUFFIX_CHANGE_SORT_BY,
  ACTION_SUFFIX_CHANGE_ORDER_BY,
  ACTION_SUFFIX_CHANGE_PAGE,
  ACTION_SUFFIX_PATCH_COLLECTION,
  ACTION_SUFFIX_APPEND_TO_COLLECTION,
  ACTION_SUFFIX_FILTER_COLLECTION,
];
