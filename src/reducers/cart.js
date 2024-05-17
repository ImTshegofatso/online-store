// Import action types
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions';

// Initial state
const initialState = [];

// Cart reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // Add the product to the cart
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      // Remove the product from the cart
      return state.filter(product => product.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
