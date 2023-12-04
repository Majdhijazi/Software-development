import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home_p/home";
import Menu from "../pages/menu_p/menu";
import CheckOut from "../pages/checkout_p/checkout";
import Layout from "../layout/layout";


const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* User Interface */}
        <Route path="/" exact element={<Layout children={<Home />} />} />
        <Route path="/menu" element={<Layout children={<Menu />} />} />
        <Route path="/checkout" element={<Layout children={<CheckOut />} />} />

      </Routes>
    </Router>
  );
};

export default Routing;
