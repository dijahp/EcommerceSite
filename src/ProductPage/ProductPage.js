import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';
import './ProductPage.css';
import SingleProduct from './SingleProduct';

function ProductPage(props) {
  let { id } = useParams();
  const [product, setProduct] = useState('');

  useEffect(() => {
    axios('../products.json').then((res) => {
      const { data } = res;
      let dataArray = data.items;

      let result = dataArray.filter((specProduct) => specProduct.id === +id);
      result = result[0];
      setProduct(result);
    });
  }, []);
  return (
    <div className="ProductPage-container">
      <SingleProduct product={product} handleAddCart={props.handleAddCart} />
    </div>
  );
}

export default ProductPage;
