import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';

function Payment(props) {
  //Test gateway
  return (
    <form className="ShippingMethod">
      <div className="cc-info">
        <label>Credit Card Number</label>
        <input type="text" placeholder="1234 1234 1234 1234" />
      </div>
      <div className="expire-security">
        <div className="expire-block">
          <label>Expires</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="security-co-block">
          <label>Security Code</label>
          <input type="text" placeholder="CVC" />
        </div>
      </div>
      <button type="submit">Complete Order</button>
    </form>
  );
}

export default Payment;
