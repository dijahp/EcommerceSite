import React from 'react';
import './CartItem.css';

function CartItem(props) {
  const { name, line_total, price, image, quantity } = props.cartData;
  console.log(image.url);
  const setQtyLimits = () => {
    let rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(<option value={i}>{i}</option>);
    }
    return rows;
  };
  return (
    <div className="CartItem-container">
      <img src={image.url} alt="" />
      <div className="CartItem-middle">
        <h3>{name}</h3>
        <div className="CartItem-qtycontainer">
          <p>Quantity</p>
          <select
            className="cart-qty-drop"
            name="Quantity"
            label="Quantity"
            value={quantity}
          >
            {setQtyLimits()}
          </select>
        </div>
      </div>
      <div className="CartPage-right">
        <h4 className="cartItem-total">
          ${line_total.formatted}{' '}
          <span className="indivtotal">(${price.raw} each)</span>
        </h4>
      </div>
      <span className="DeleteItem">X</span>
    </div>
  );
}

export default CartItem;
