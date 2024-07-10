import { queryDataCloud, describeObject } from '../../services/salesforce_api';
import { logError } from '../../utils/errorHandler';

export const SET_CURRENT_OBJECT = 'SET_CURRENT_OBJECT';
export const SET_OBJECT_FIELDS = 'SET_OBJECT_FIELDS';
export const SET_QUERY_RESULTS = 'SET_QUERY_RESULTS';
export const SET_ERROR = 'SET_ERROR';

export const setCurrentObject = (objectName) => ({
  type: SET_CURRENT_OBJECT,
  payload: objectName,
});

export const setObjectFields = (fields) => ({
  type: SET_OBJECT_FIELDS,
  payload: fields,
});

export const setQueryResults = (results) => ({
  type: SET_QUERY_RESULTS,
  payload: results,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchObjectFields = (objectName) => async (dispatch) => {
  try {
    const fields = await describeObject(objectName);
    dispatch(setObjectFields(fields));
  } catch (error) {
    logError(error, { context: 'fetchObjectFields', objectName });
    dispatch(setError('Failed to fetch object fields'));
  }
};

export const executeQuery = (query) => async (dispatch) => {
  try {
    const results = await queryDataCloud(query);
    dispatch(setQueryResults(results));
  } catch (error) {
    logError(error, { context: 'executeQuery', query });
    dispatch(setError('Failed to execute query'));
  }
};
