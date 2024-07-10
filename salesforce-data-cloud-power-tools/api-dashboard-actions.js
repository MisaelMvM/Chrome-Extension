import { getAPIConnections, updateAPIConnectionStatus } from '../../services/api_service';
import { logError } from '../../utils/errorHandler';

export const FETCH_API_CONNECTIONS_START = 'FETCH_API_CONNECTIONS_START';
export const FETCH_API_CONNECTIONS_SUCCESS = 'FETCH_API_CONNECTIONS_SUCCESS';
export const FETCH_API_CONNECTIONS_FAILURE = 'FETCH_API_CONNECTIONS_FAILURE';
export const UPDATE_API_CONNECTION_SUCCESS = 'UPDATE_API_CONNECTION_SUCCESS';

export const fetchAPIConnections = () => async (dispatch) => {
  dispatch({ type: FETCH_API_CONNECTIONS_START });
  try {
    const connections = await getAPIConnections();
    dispatch({ type: FETCH_API_CONNECTIONS_SUCCESS, payload: connections });
  } catch (error) {
    logError(error, { context: 'fetchAPIConnections' });
    dispatch({ type: FETCH_API_CONNECTIONS_FAILURE, payload: error.message });
  }
};

export const updateAPIConnection = (connectionId, updates) => async (dispatch) => {
  try {
    const updatedConnection = await updateAPIConnectionStatus(connectionId, updates);
    dispatch({ type: UPDATE_API_CONNECTION_SUCCESS, payload: updatedConnection });
  } catch (error) {
    logError(error, { context: 'updateAPIConnection', connectionId, updates });
    // You might want to dispatch a failure action here
  }
};
