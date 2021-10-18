import React from 'react';
import './Navigation.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function Navigation(props) {
  const { cartTotal } = props;
  return (
    <nav className="Navigation">
      <h1>
        <Link to="/">branché</Link>
      </h1>
      <div className="link-container">
        <ul>
          <li className="navLinks">
            <Link to="/products">Products</Link>
          </li>
          <li className="navLinks">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navLinks">
            <Link to="/about">About</Link>
          </li>
          <li className="navLinks">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="minicart-container">
        <p>Cart</p>
        <div className="circle">{cartTotal}</div>
      </div>
    </nav>
  );
}

export default Navigation;
