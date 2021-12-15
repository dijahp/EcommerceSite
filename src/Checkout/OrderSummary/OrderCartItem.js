import React from 'react';
import './OrderCartItem.css'

function OrderCartItem(props) {
    const {item} = props;

  return (
    <div className="OrderCartItem-container">
      <img className="OrderCartItem-img"src={item.image.url} alt="" />
      <div className="right-order-cart">
          <div className="right-order-cart-name">
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
          </div>
          <div className="right-order-cart-price">
              <p>${item.price.formatted}</p>
          </div>
      </div>
      </div>
  );
}

export default OrderCartItem;
