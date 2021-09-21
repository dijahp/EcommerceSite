import React from 'react';
import './Navigation.css';
function Navigation() {
  return (
    <nav className="Navigation">
      <h1>branché</h1>
      <div className="link-container">
        <ul>
          <li className="navLinks">Products</li>
          <li className="navLinks">Blogs</li>
          <li className="navLinks">About</li>
          <li className="navLinks">Contact</li>
        </ul>
      </div>
      <div className="minicart-container">
        <p>Cart</p>
        <div className="circle">0</div>
      </div>
    </nav>
  );
}

export default Navigation;
