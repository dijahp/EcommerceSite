import React from 'react';

import './ImageCard.css';
function ImageCard(props) {
  const { img_url, name, price } = props;
  return (
    <div className="img-card">
      <img src={img_url} alt="" />
      <div className="product-info">
        <p>{name}</p>
        <small>${price}</small>
      </div>
    </div>
  );
}

export default ImageCard;
