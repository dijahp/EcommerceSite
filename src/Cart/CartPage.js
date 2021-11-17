import React, { useState, useEffect } from 'react';
import './CartPage.css';
import CartItem from './CartItem';
import { commerce } from '../lib/commerce';

function CartPage(props) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    commerce.cart.contents().then((res) => {
      setCartItems(res);
      console.log(cartItems);
    });
  }, []);

  return (
    <div className="CartPage-container">
      <div className="CartPage-inner">
        <div className="CartPage-header">
          <h1>Your Shopping Bag</h1>
          <button>Checkout</button>
        </div>
        <div className="Cart-items">
          {cartItems.map((item) => (
            <CartItem cartData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
