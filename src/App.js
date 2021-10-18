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
import axios from 'axios';
import Navigation from './Navigation/Navigation';

function App() {
  const [loading, setLoading] = useState();
  const [loadNumber, setLoadNumber] = useState(0);
  const [data, setData] = useState([]);
  const [cartTotal, setCartTotal] = useState(() => {
    let storedData = localStorage.getItem('cart');
    if (!storedData) {
      return 0;
    } else {
      return storedData;
    }
  });

  const addCartTotal = (amount) => {
    setCartTotal(parseInt(cartTotal) + parseInt(amount));
    localStorage.setItem('cart', cartTotal);
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
    axios.get('products.json').then((res) => {
      setData(res.data.items);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation cartTotal={cartTotal} />
        <Switch>
          <Route exact path="/">
            <LoadBar loading={loading} loadNumber={loadNumber} />
            <HomePage data={data} />
          </Route>
          <Route exact path="/products">
            <ProductsPage data={data} />
          </Route>
          <Route exact path="/products/:id">
            <ProductPage handleAddCart={addCartTotal} />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
