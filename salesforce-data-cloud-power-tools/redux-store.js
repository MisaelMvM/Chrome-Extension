import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import dataExplorerReducer from './reducers/dataExplorerReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  dataExplorer: dataExplorerReducer,
  auth: authReducer,
  // Add other reducers here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
