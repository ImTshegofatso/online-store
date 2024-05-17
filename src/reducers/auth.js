import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the auth slice
const initialState = {
    isAuthenticated: false,
    userName: null, // Add this to store the user's name
};

// Use createSlice to generate the auth slice
const authSlice = createSlice({
    // The name of the slice. This is used as a prefix for the generated action types.
    name: 'auth',
    // The initial state for the slice
    initialState,
    // An object where the keys are action names and the values are reducer functions
    reducers: {
        // The login reducer. It sets isAuthenticated to true and stores the user's name.
        login(state, action) {
            state.isAuthenticated = true;
            state.userName = action.payload; // Store the user's name
        },
        // The logout reducer. It sets isAuthenticated to false and clears the user's name.
        logout(state) {
            state.isAuthenticated = false;
            state.userName = null; // Clear the user's name
        },
        // The register reducer. It sets isAuthenticated to true and stores the user's name.
        register(state, action) {
            state.isAuthenticated = true;
            state.userName = action.payload; // Store the user's name
        },
    },
});

// Export the generated actions
export const { login, logout, register } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
