import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';

function ShippingMethod(props) {
  const { checkoutToken, setShippingChoice } = props;
  const [shippingMethods, setShippingMethods] = useState([]);
  const [selected, setSelected] = useState();
  const [shippingID, setShippingID] = useState();

  const getShippingMethods = () => {
    commerce.checkout
      .getShippingOptions(checkoutToken, {
        country: 'US',
      })
      .then((res) => {
        setShippingMethods(res);
      });
  };
  const handleShippingChange = (e) => {
    setSelected(e.target.value);
    setShippingID(e.target.getAttribute('id').split('-')[1]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShippingChoice(shippingID);
  };
  useEffect(() => {
    getShippingMethods();
  }, [checkoutToken]);

  const renderShippingMethods = shippingMethods.map((method) => (
    <div className="shipping-method-item" key={method.id}>
      <input
        type="radio"
        id={`shippingmethod-${method.id}`}
        value={method.description}
        onChange={handleShippingChange}
        checked={selected === method.description}
      />
      <label htmlFor="shippingmethod">
        {method.description}
        {method.price.formatted === '0.00'
          ? ' (Free)'
          : ` ($${method.price.formatted})`}
      </label>
    </div>
  ));

  return (
    <form className="ShippingMethod" onSubmit={handleSubmit}>
      {renderShippingMethods}
      <button type="submit">Save and Continue</button>
    </form>
  );
}

export default ShippingMethod;
