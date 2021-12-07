import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { commerce } from '../lib/commerce';
import SingleProduct from './SingleProduct';
import Loader from '../Shared/Loading';
function ProductPage(props) {
  let { id } = useParams();
  const [product, setProduct] = useState('');
  useEffect(() => {
    async function filtering() {
      const res = await commerce.products.list();
      const { data } = res;
      let result = data.filter((selectedProduct) => selectedProduct.id === id);
      setProduct(result);
    }

    filtering();
  });
  return (
    <div className="ProductPage-container">
      {product != '' ? (
        <SingleProduct
          product={product[0]}
          handleAddCart={props.handleAddCart}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ProductPage;
