import React from 'react';

import './ProductCard.css';

function ProductCard(props) {
  const { id, name, img_url, price, handleClick } = props;
  return (
    <div className="product-card" onClick={() => handleClick(id)}>
      <div
        className="img-section"
        style={{
          background: `url(${img_url}) center center/contain no-repeat`,
        }}
      ></div>
      <div className="single-product-info">
        <p>{name}</p>
        <small>${price}</small>
      </div>
    </div>
  );
}

export default ProductCard;
