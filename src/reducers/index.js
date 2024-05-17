// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './auth'; // Import your auth reducer
import productsReducer from './products'; // Import your products reducer

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  // Add other reducers here
});

export default rootReducer;
