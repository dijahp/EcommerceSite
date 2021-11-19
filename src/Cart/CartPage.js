import React, { useState, useEffect } from 'react';
import './CartPage.css';
import CartItem from './CartItem';
import { commerce } from '../lib/commerce';

function CartPage(props) {
  const [cartItems, setCartItems] = useState([]);
  const [itemDeleted, setItemDeleted] = useState();

  const fetchCartItems = () => {
    commerce.cart.contents().then((res) => {
      setCartItems(res);
      console.log(cartItems);
    });
  };

  const handleItemRemoval = async (id) => {
    await commerce.cart.remove(id).then((response) => console.log(response));
    setItemDeleted(id);
  };

  useEffect(() => {
    fetchCartItems();
  }, [itemDeleted]);

  const displayNoneorItems = () => {
    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <CartItem cartData={item} handleItemRemoval={handleItemRemoval} />
      ));
    } else if (cartItems.length === 0) {
      return <h2 className="itemsEmpty">There are no items!</h2>;
    }
  };

  return (
    <div className="CartPage-container">
      <div className="CartPage-inner">
        <div className="CartPage-header">
          <h1>Your Shopping Bag</h1>
          <button>Checkout</button>
        </div>
        <div className="Cart-items">{displayNoneorItems()}</div>
      </div>
    </div>
  );
}

export default CartPage;
