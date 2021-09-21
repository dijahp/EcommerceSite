import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import './index.css';
import SelectedProducts from './SelectedProducts/SelectedProducts';
import NewProductList from './NewProductList/NewProductList';
function HomePage() {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 3000);
  return (
    <div className={`Homepage-container ${show ? 'appear' : ''}`}>
      <Navigation />
      <SelectedProducts />
      <NewProductList />
    </div>
  );
}

export default HomePage;
