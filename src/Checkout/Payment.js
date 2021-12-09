import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import './Payment.css';

function Payment(props) {
  const { handlePlaceOrder } = props;
  //Test gateway
  return (
    <form className="ShippingMethod" onSubmit={handlePlaceOrder}>
      <div className="cc-info">
        <label>Credit Card Number</label>
        <input type="text" placeholder="1234 1234 1234 1234" disabled />
      </div>
      <div className="expire-security">
        <div className="expire-block">
          <label>Expires</label>
          <input type="text" placeholder="MM/YY" disabled />
        </div>
        <div className="security-co-block">
          <label>Security Code</label>
          <input type="text" placeholder="CVC" disabled />
        </div>
      </div>
      <button type="submit">Complete Order</button>
    </form>
  );
}

export default Payment;
