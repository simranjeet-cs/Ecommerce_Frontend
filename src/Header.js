import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Import the CSS file
import {isLoggedIn} from './App.js'


const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="header">
        <span>MarketPlace</span>
        {isLoggedIn && (
      <Link to="/homepage" className="home-link">
        Home
      </Link>)}
      {isLoggedIn && (
      <Link to="/checkout" className="home-link">
        Checkout
      </Link>)}
      {isLoggedIn && (
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
