import React, { useState, useEffect } from 'react';
import './App.css';
import LoadBar from './LoadBar/LoadBar';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import ProductsPage from './Products/ProductsPage';
import ProductPage from './ProductPage/ProductPage';
import ComingSoon from './ComingSoon/ComingSoon';
import CartPage from './Cart/CartPage';
import CheckoutPage from './Checkout/CheckoutPage';

import axios from 'axios';
import Navigation from './Navigation/Navigation';
import { commerce } from './lib/commerce';

function App() {
  const [loading, setLoading] = useState();
  const [loadNumber, setLoadNumber] = useState(0);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState();
  const [cartTotal, setCartTotal] = useState();
  // const addCartTotal = (amount) => {
  //   setCartTotal(parseInt(cartTotal) + parseInt(amount));
  //   localStorage.setItem('cart', cartTotal);
  // };

  const addToCartFunc = (product_id, qty) => {
    let currentCart;
    commerce.cart
      .add(product_id, qty)
      .then((response) => (currentCart = response.cart.id));
    commerce.cart.retrieve(currentCart).then((cart) => {
      setCartTotal(cart.total_items);
      setCart(cart);
    });
  };

  const fetchProducts = async () => {
    const res = await commerce.products.list();
    setData(res.data);
  };

  useEffect(() => {
    setLoading(true);
    const interval = setInterval(() => {
      if (loadNumber < 100) {
        setLoadNumber(loadNumber + 5);
      } else if (loadNumber === 100) {
        setLoading(false);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [loadNumber]);

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setCartTotal(cart.total_items));
    fetchProducts();
    setCart(cart);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation cartTotal={cartTotal} />
        <Switch>
          <Route exact path="/">
            <LoadBar loading={loading} loadNumber={loadNumber} />
            <HomePage products={data} />
          </Route>
          <Route exact path="/products">
            <ProductsPage products={data} />
          </Route>
          <Route exact path="/products/:id">
            <ProductPage handleAddCart={addToCartFunc} />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage cart={cart} />
          </Route>
          <Route exact path="/blog">
            <ComingSoon />
          </Route>
          <Route exact path="/about">
            <ComingSoon />
          </Route>
          <Route exact path="/contact">
            <ComingSoon />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
