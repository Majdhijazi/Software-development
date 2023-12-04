import React from 'react'
import'./layout.css'
import FormPopup from '../components/login/login';

const Navbar = () =>{
  return (
    <nav>
      <ul className="nav-flex-row">
        <li className="nav-item">
          <a href="Home">Home</a>
        </li>
        <li className="nav-item">
          <a href="Menu">Menu</a>
        </li>
        <li className="nav-item">
          <a href="CheckOut">Checkout</a>
        </li>
        <FormPopup/>
      </ul>
    </nav>
  );
}

const Footer = () => {
  return (
    <div className="container">
      <div className="row-flex">
        <div className="flex-column-form">
          <h3>Make an Order</h3>
          <div className="media-centered">
            <button type="submit" className="btn btn-primary">Order Now!</button>
          </div>
        </div>
        <div className="opening-time">
          <h3>Opening times</h3>
          <p>
            <span>Monday—Thursday: 08:00 — 22:00</span>
            <span>Friday—Saturday: 09:00 — 23:00 </span>
            <span>Sunday: 10:00 — 17:00</span>
          </p>
        </div>
        <div className="contact-adress">
          <h3>Contact</h3>
          <p>
            <span>+49 1627370029 </span>
            <span> Berlin, Sees Str.26 </span>
            <span> CEO Majd Hijazi</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout