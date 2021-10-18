import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProductCard from './ProductCard/ProductCard';
import './ProductsPage.css';

function ProductsPage(props) {
  const { data } = props;
  let history = useHistory();

  const handleClick = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="ProductsPage-container">
      <div className="productListed">
        {data.map((product) => {
          const { id, name, img_url, price } = product;
          return (
            <ProductCard
              id={id}
              name={name}
              img_url={img_url}
              price={price}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
