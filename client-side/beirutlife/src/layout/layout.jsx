import React from 'react'
import'./layout.css'
import FormPopup from '../components/login/login';

const Navbar = () =>{
  return (
    <nav>
      <ul className="nav-flex-row">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="menu">Menu</a>
        </li>
        <li className="nav-item">
          <a href="checkout">Checkout</a>
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
            <div>+491627370029</div>
            <div>Wedding, Sees str 16</div>
            <div>CEO Majd Hijazi</div>
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