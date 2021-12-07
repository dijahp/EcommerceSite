import React, { useState } from 'react';
import './AddressForm.css';

function AddressForm(props) {
  const initialValues = {
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    city: '',
    state: '',
    email: '',
  };

  const [values, setValues] = useState(initialValues);
  const { advanceFromAddress } = props;
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    advanceFromAddress(values);
    console.log('it worked');
  };

  return (
    <form className="AddressForm" onSubmit={handleSubmit}>
      <div className="shipping-name">
        <div className="firstname-field">
          <label htmlFor="first name">First Name</label>
          <input
            value={values.firstname}
            name="firstname"
            onChange={handleInputChange}
          />
        </div>
        <div className="lastname-field">
          <label htmlFor="last name">Last Name</label>
          <input
            value={values.lastname}
            name="lastname"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="addressline-field">
        <label htmlFor="address line">Address Line</label>
        <input
          value={values.address}
          name="address"
          onChange={handleInputChange}
        />
      </div>
      <div className="zipcity-container">
        <div className="zipcode-field">
          <label htmlFor="zipcode">Zipcode</label>
          <input
            value={values.zipcode}
            name="zipcode"
            onChange={handleInputChange}
          />
        </div>
        <div className="city-field">
          <label htmlFor="city">City</label>
          <input value={values.city} name="city" onChange={handleInputChange} />
        </div>
      </div>
      <div className="state-field">
        <label htmlFor="state">State</label>
        <input value={values.state} name="state" onChange={handleInputChange} />
      </div>
      <div className="email-field">
        <label htmlFor="email">Email</label>
        <input value={values.email} name="email" onChange={handleInputChange} />
      </div>
      <button type="submit">Save and Continue</button>
    </form>
  );
}

export default AddressForm;
