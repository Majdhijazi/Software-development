import React from 'react';
import './food.css';

const FoodCard = ({ name, price, image }) => (
  <div className="card">
    <img src={image} alt={name} className="image" />
    <div className="content">
      <h3 className="name">{name}</h3>
      <p className="price">$ {price}</p>
    </div>
    <div className="content">
      <button className='btn btn-primary'>ADD</button>
    </div>
  </div>
);

export default FoodCard;
