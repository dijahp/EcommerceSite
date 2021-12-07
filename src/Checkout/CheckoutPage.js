import React, { useState, useEffect } from 'react';
import './CheckoutPage.css';
import { commerce } from '../lib/commerce';
import AddressForm from './AddressForm';
import ShippingMethod from './ShippingMethod';
import Payment from './Payment';

function CheckoutPage(props) {
  const [shippingAddress, setShippingAddress] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState();
  const [shippingChoice, setShippingChoice] = useState();

  const { cart } = props;
  const advanceFromAddress = (data) => {
    setShippingAddress(data);
    setActiveStep(1);
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        setCheckoutToken(token.id);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart]);
  return (
    <div className="CheckoutPage-container">
      <div className="left-checkout">
        <div className="shipping-information">
          <h1 className="checkout-heading">Checkout</h1>
          <h2 className="shipping-info-heading">Shipping Information</h2>
          <AddressForm advanceFromAddress={advanceFromAddress} />
        </div>
        <div className="shipping-method">
          <h2 className="shipping-method-heading">Shipping Method</h2>
          <ShippingMethod
            checkoutToken={checkoutToken}
            setShippingChoice={setShippingChoice}
          />
        </div>
        <div className="payment-method">
          <h2 className="payment-method-heading">Payment Method</h2>
          <Payment />
        </div>
      </div>
      <div className="order-summary"></div>
    </div>
  );
}

export default CheckoutPage;
