// Import necessary modules
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import App from './App'; // Your main app component

// Get a reference to the root DOM node
const rootElement = document.getElementById('root');

// Create a root and render the App component into it
createRoot(rootElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
