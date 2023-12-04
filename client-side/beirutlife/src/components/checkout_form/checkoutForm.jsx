import React, { useState } from 'react';
import './checkoutForm.css'; // Import your CSS file for styling

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your checkout logic here, e.g., send data to a server
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout Form</h2>
      <form className='checkout-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='checkout-form--label' htmlFor="name">Name</label>
          <input
          className='checkout-form-input'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='checkout-form-label' htmlFor="email">Email</label>
          <input
            className='checkout-form-input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='checkout-form-label' htmlFor="cardNumber">Address</label>
          <input
            className='checkout-form-input'
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='checkout-form-label' htmlFor="expirationDate">Phone Number</label>
          <input
            className='checkout-form-input'
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <button className='checkout-form-button' type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
