import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

// Import configureStore and Reducer:
// The code imports the configureStore function from @reduxjs/toolkit, used to create the Redux store.
// It also imports the reducer function, cartReducer, from the CartSlice file, assuming that you have a slice for managing the shopping cart state defined in the file.

// Store Configuration:
// configureStore is invoked with an object containing the store configuration options.
// The reducer property is specified as an object where each key represents a slice of state, and each value represents the corresponding reducer function.
// In this case, the cartReducer is associated with the cart slice of state. This means that the state managed by the cartReducer will be stored under the cart key in the Redux store.

// Other Store Configuration Options:
// Additional store configuration options can be included in the object passed to configureStore.
// For example, you can include middleware, enhancers, or other options such as devtools configuration.

// Exporting the store:
// Finally, the configured Redux store (store) is exported from the module, making it available for use throughout the application.

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;