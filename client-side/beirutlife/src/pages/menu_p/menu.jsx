import React from "react";
import IntroComponent from "../../components/intro_section/intro";
import FoodCard from "../../components/food_card/food";
import FoodIMg from '../../assets/food01.jpg'
import './menu.css'

const Menu = () => {

  const foodData = [
    { name: 'Pizza', price: 12.99, image: FoodIMg },
    { name: 'Burger', price: 8.99, image: FoodIMg },
    { name: 'Salad', price: 6.99, image: FoodIMg },
    { name: 'Pizza', price: 12.99, image: FoodIMg },
    { name: 'Burger', price: 8.99, image: FoodIMg },
    { name: 'Salad', price: 6.99, image: FoodIMg },
  ];

  return (
    <div>
      <IntroComponent title={"A menu for a Life"} pic={"menu-section-intro"} />
      <div className="menu-container">
        {foodData.map((food, index) => (
          <FoodCard key={index} {...food} />
        ))}
      </div>
      <button className="checkbtn checkbtn-primary">GO TO CHECKOUT!</button>
    </div>
  );
};

export default Menu;
