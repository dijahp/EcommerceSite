import React, {useState, useEffect} from 'react';
import OrderCartItem from './OrderCartItem';

import './OrderSummary.css';

function OrderSummary(props) {

    const {shippingPrice, cart, cartLoaded} = props;
    const [itemsLoaded, setItemsLoaded] = useState(false);
    const [updatedCart, setUpdatedCart] = useState(cart); 

    

  if(updatedCart === undefined){
      return(<section className="orderSummary-container">
          <h2>Error</h2>
      </section>)
  } else if(updatedCart != undefined){
    return (
        <section className="orderSummary-container">
            <h2>Order Summary</h2>
            {updatedCart.line_items.map((item) => (
                <OrderCartItem key={item.id} item={item}/>
              ))}
        <div className="order-subtotal">
              <div className="subtotal-line1">
                  <p>Subtotal:</p><span>${updatedCart.subtotal.formatted}</span>
              </div>
              <div className="shipping-line2">
                  <p>Shipping:</p><span>${shippingPrice}</span>
              </div>
              <div className="tax-line3">
                  <p>Tax:</p><span>$0.00</span>
              </div>
          </div>
          <div className="order-total">
              <p className='order-total-label'>Total:</p><span>${parseFloat(updatedCart.subtotal.formatted.replace(/,/g, '')) + parseFloat(shippingPrice)}</span>
          </div>
          </section>)
  }

    

}

export default OrderSummary;
