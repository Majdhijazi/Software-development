import React, { useState } from 'react';
import './checkout.css';

const products = [
  { id: 1, name: 'Burger', price: 10 },
  { id: 2, name: 'Pizza', price: 15 },
  { id: 3, name: 'Salad', price: 8 },
  // Add more products as needed
];

const CheckoutComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  
  const handleItemClick = (productId) => {
    const index = selectedItems.indexOf(productId);
    if (index === -1) {
      setSelectedItems([...selectedItems, productId]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItems(updatedItems);
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, itemId) => {
      const selectedItem = products.find(product => product.id === itemId);
      return total + selectedItem.price;
    }, 0);
  };

  return (
    <div className="checkout-container">
      <h2>Your Plates</h2>
      <div className="product-list">
        {products.map(product => (
          <div
            key={product.id}
            className={`product-item ${selectedItems.includes(product.id) ? 'selected' : ''}`}
            onClick={() => handleItemClick(product.id)}
          >
            {product.name} - ${product.price}
          </div>
        ))}
      </div>
      <div className="total">Total: ${calculateTotal()}</div>
    </div>
  );
};

export default CheckoutComponent;
