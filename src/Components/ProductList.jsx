import React, { useState } from 'react';
import './ProductList.css'; 
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';

// In the above code, addItemToCart is used to get the reducer function detail to dispatch which product is added to the cart to store.js.

const ProductList = () => {
    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products

    const products = [
        { id: 1, name: 'Product A', price: 60 },
        { id: 2, name: 'Product B', price: 75 },
        { id: 3, name: 'Product C', price: 30 },
    ];

    const handleAddToCart = product => {
        dispatch(addItemToCart(product));
        setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
      };

    return (
        <div className="product-list">
            <h2 className="product-list-title">Products</h2>
            <ul className="product-list-items">
                {products.map(product => (
                    <li key={product.id} className="product-list-item">
                        <span>{product.name} - ${product.price}</span>
                        {/* This button, when clicked, invokes the handleAddToCart function with the product as an argument.
                            The button's appearance is dynamically determined by whether the product is included in the disabledProducts array, which disables the button if the product is in the array or if the product is added.
                            This functionality prevents adding duplicate items to the cart and provides visual feedback by styling the button as disabled when necessary. */}
                        <button
                            className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                            onClick={() => handleAddToCart(product)}
                            disabled={disabledProducts.includes(product.id)} // Disable button if product is in disabledProducts
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
