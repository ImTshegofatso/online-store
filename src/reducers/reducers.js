const initialState = {
    products: [], // Initial state for products
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
  
      case 'REMOVE_PRODUCT':
        // Assuming action.payload contains the product ID to remove
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload),
        };
  
      case 'UPDATE_PRODUCT':
        // Assuming action.payload contains the updated product object
        const updatedProducts = state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        );
        return {
          ...state,
          products: updatedProducts,
        };
  
      default:
        return state;
    }
  };
  
  export default Reducer;
  