import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css'; // Import CSS file for component-specific styles

// Now in ShoppingCart.jsx component, you will create logic that shows items that user have 
// added to the shopping cart. It uses a special tool called Redux to manage the cart using redux 
// and keep track of what the user is buying. The component lets the user see the items in the 
// cart, their prices, and how many of each item the user has added. Users can also remove items 
// from the cart or change the quantity of each item. It's like having a virtual shopping basket 
// that helps the user to keep track of what they will purchase.

// Function Component: The ShoppingCart component is a functional component declared using the arrow function syntax.
// Redux Hooks: The component uses useDispatch and useSelector hooks from react-redux to interact with the Redux store. useDispatch is used to dispatch actions, and useSelector is used to extract data from the Redux store.
// State Retrieval: cartItems variable retrieves the array of items from the Redux store's state by selecting state.cart.cartItems. totalAmount calculates the total amount by iterating through cartItems and multiplying each item's price by its quantity, then summing them up.


const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const handleRemoveItem = itemId => {
      dispatch(removeItemFromCart(itemId));
    };
    const handleClearCart = () => {
      dispatch(clearCart());
    };
    const handleIncreaseQuantity = itemId => {
      dispatch(increaseItemQuantity(itemId));
    };
    const handleDecreaseQuantity = itemId => {
      dispatch(decreaseItemQuantity(itemId));
    };
    return (
      <>
        <div className="shopping-cart">
          <h2 className="shopping-cart-title">Shopping Cart</h2>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.name} - ${item.price}</span>
                <div className="quantity-controls">
                  <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span> {item.quantity}</span>
                  <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
        </div>
        <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>
      </>
    );
  };
  export default ShoppingCart;