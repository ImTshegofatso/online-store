// Action Types
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const LOGIN_USER = 'LOGIN_USER'; // Added for login action
export const REGISTER_USER = 'REGISTER_USER'; // Updated for clarity

// Action Creators for product management
export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product,
});

// Action Creator for user registration
export const registerUser = user => ({
  type: REGISTER_USER,
  payload: user,
});

// Action Creator for user login
export const loginUser = userName => ({
  type: LOGIN_USER,
  payload: userName,
});
