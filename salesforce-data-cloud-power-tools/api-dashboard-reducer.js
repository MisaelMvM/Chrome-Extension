import {
  FETCH_API_CONNECTIONS_START,
  FETCH_API_CONNECTIONS_SUCCESS,
  FETCH_API_CONNECTIONS_FAILURE,
  UPDATE_API_CONNECTION_SUCCESS
} from '../actions/apiDashboardActions';

const initialState = {
  connections: [],
  loading: false,
  error: null
};

const apiDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_CONNECTIONS_START:
      return { ...state, loading: true, error: null };
    case FETCH_API_CONNECTIONS_SUCCESS:
      return { ...state, loading: false, connections: action.payload };
    case FETCH_API_CONNECTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_API_CONNECTION_SUCCESS:
      return {
        ...state,
        connections: state.connections.map(conn =>
          conn.id === action.payload.id ? action.payload : conn
        )
      };
    default:
      return state;
  }
};

export default apiDashboardReducer;
