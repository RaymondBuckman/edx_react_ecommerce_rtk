import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
  };

//   name: A string value representing the name of your slice. It's used internally by Redux Toolkit for action type prefixing and other purposes.
// initialState: An object representing the initial state of your slice.
// reducers: An object containing reducer functions. Each key-value pair represents a single reducer, where the key is the name of the action and the value is the reducer function.

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // This reducer function handles the action of adding an item to the cart.
        // It takes two parameters: state (current state of the slice) and action (the dispatched action containing the payload).
        // It first checks if the item already exists in the cart by searching for its ID within state.cartItems.
        // If the item exists (existingItem is true), it increases the quantity of the existing item in the cart by 1.
        // If the item doesn't exist in the cart, it adds the item to the cartItems array with a quantity of 1.
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
          },
        // This reducer function handles the action of removing an item from the cart.
        // It takes two parameters: state and action.
        // It updates the cartItems array by filtering out the item with the ID provided in the action payload.
          removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
          },
        // This reducer function handles the action of clearing the entire cart.
        // It takes only the state parameter.
        // It sets the cartItems array to an empty array, effectively clearing all items from the cart.
          clearCart(state) {
            state.cartItems = [];
          },
        // This reducer function handles the action of increasing the quantity of a specific item in the cart.
        // It takes two parameters: state and action.
        // state: This represents the current state of the Redux store. It typically includes the data relevant to the application.
        // action: This is an object that describes the action that occurred. Redux actions are plain JavaScript objects that must have a type property indicating the type of action being performed. Additionally, they may contain additional data necessary to carry out the action. In this case, action.payload likely contains the identifier (id) of the item whose quantity needs to be increased.
        // The function logic:
        // It finds the item in the shopping cart whose identifier (id) matches the identifier passed in the action payload.
        // If the item is found (itemToIncrease is not undefined), it increments the quantity property of that item by 1.
          increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
          },
        // This reducer function handles the action of decreasing the quantity of a specific item in the cart.
        // It takes two parameters: state and action.
        // state: This represents the current state of the Redux store, typically containing all the data relevant to the application.
        // action: Similar to the previous function, it’s an object describing the action being performed. It’s expected to have a type property indicating the action type and may include additional data needed to carry out the action. Here, action.payload likely holds the identifier (id) of the item whose quantity needs to be decreased.
        // The function logic:
        // It attempts to find the item in the shopping cart whose identifier (id) matches the identifier provided in the action payload.
        // If the item is found (itemToDecrease is not undefined) and its quantity is greater than 1, it decrements the quantity property of that item by 1.
          decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
              itemToDecrease.quantity -= 1;
            }
          },


    }
});
export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
  export default CartSlice.reducer;