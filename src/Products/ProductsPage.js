import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProductCard from './ProductCard/ProductCard';
import './ProductsPage.css';

function ProductsPage(props) {
  const { products } = props;
  let history = useHistory();

  const handleClick = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="ProductsPage-container">
      <div className="productListed">
        {products.map((product) => {
          const { id, name, image, price } = product;
          return (
            <ProductCard
              key={id}
              id={id}
              name={name}
              img_url={image.url}
              price={price.formatted}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
