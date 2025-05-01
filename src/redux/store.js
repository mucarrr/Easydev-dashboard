

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import authReducer from './auth/AuthReducer'; // Dosya ismi küçük harfse buna dikkat et

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
