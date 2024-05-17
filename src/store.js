import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; 
import authReducer from './reducers/auth'; 
import cartReducer from './reducers/cart'; 
import otherReducers from './reducers/reducers'; 

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  ...otherReducers,
});

const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const monitorReducerEnhancer = createStore => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = Math.round(end - start);
    console.log('reducer process time:', diff);
    return newState;
  };
  return createStore(monitoredReducer, initialState, enhancer);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, loggerMiddleware),
    monitorReducerEnhancer
  )
);

export default store;
