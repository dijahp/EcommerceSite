import React, { useState } from 'react';
import './CartItem.css';
import { commerce } from '../lib/commerce';

function CartItem(props) {
  const { name, line_total, price, image, quantity, id } = props.cartData;
  const { handleItemRemoval } = props;
  const [quantityVal, setQuantityVal] = useState(quantity);
  const [updatedLineTotal, setUpdatedLineTotal] = useState(line_total);
  const setQtyLimits = () => {
    let rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(<option value={i}>{i}</option>);
    }
    return rows;
  };

  const handleItemQtyUpdate = (id, e) => {
    commerce.cart.update(id, { quantity: e.target.value }).then((response) => {
      setQuantityVal(response.quantity);
      setUpdatedLineTotal(response.line_total);
    });
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
            value={quantityVal}
            onChange={(e) => handleItemQtyUpdate(id, e)}
          >
            {setQtyLimits()}
          </select>
        </div>
      </div>
      <div className="CartPage-right">
        <h4 className="cartItem-total">
          ${updatedLineTotal.formatted}{' '}
          <span className="indivtotal">(${price.raw} each)</span>
        </h4>
      </div>
      <span className="DeleteItem" onClick={() => handleItemRemoval(id)}>
        X
      </span>
    </div>
  );
}

export default CartItem;
