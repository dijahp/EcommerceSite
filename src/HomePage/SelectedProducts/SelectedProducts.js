import React from 'react';
import 'animate.css';
import './SelectedProducts.css';
function SelectedProducts() {
  return (
    <div className="SelectedProducts">
      <div className="selectedProducts-right">
        <h4 className="animate__animated animate__slideInUp animate__delay-2s">
          Selected Products
        </h4>
        <h1 className="animate__animated animate__slideInUp animate__delay-2s">
          S/2021
        </h1>
      </div>
      <div className="selectedProducts-left">
        <p className="animate__animated animate__slideInUp animate__delay-3s">
          A contemporary selection of jewelry, handbags, accessories and home
          decor from across the world for you.
        </p>
      </div>
      <a href="#">Shop All</a>
    </div>
  );
}

export default SelectedProducts;
