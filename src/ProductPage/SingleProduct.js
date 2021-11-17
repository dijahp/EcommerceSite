import React, { useState, useEffect } from 'react';
import './SingleProduct.css';

function SingleProduct(props) {
  const { product, handleAddCart } = props;
  const [activeImage, setActiveImage] = useState(product?.assets[0].url);
  const [imgType, setImgType] = useState('img1');
  const [quantityVal, setQuantityVal] = useState('1');
  let active = product?.assets[0].url;
  let img = product?.assets[0].url;
  let prodDesc = product.description.replace('<p>', '');
  prodDesc = prodDesc.replace('</p>', '');
  let productId = product.id;

  function handleActiveImage(img) {
    // Set state based on image clicked

    img === 'img1'
      ? (active = product?.assets[0].url)
      : (active = product?.assets[1].url);
    setActiveImage(active);
    setImgType(img);
    console.log(product);
  }

  const incrementQuantity = () => {
    if (quantityVal >= 10) {
      setQuantityVal(10);
    } else if (quantityVal < 10) {
      setQuantityVal(parseInt(quantityVal) + 1);
    }
  };
  const decrementQuantity = () => {
    if (quantityVal > 1) {
      setQuantityVal(parseInt(quantityVal) - 1);
    }
  };

  return (
    <div className="singleProductView">
      <div className="left-product">
        <div
          onClick={() => handleActiveImage('img1')}
          className={`img-container ${imgType === 'img1' ? 'active' : ''} `}
        >
          <img className="product-img1" src={product?.assets[0].url} alt="" />
        </div>
        <div
          onClick={() => handleActiveImage('img2')}
          className={`img-container ${imgType === 'img2' ? 'active' : ''} `}
        >
          <img className="product-img2" src={product?.assets[1].url} alt="" />
        </div>
      </div>
      <div className="middle-product">
        <div
          className="middle-product-img"
          style={{
            backgroundImage: `url(${
              activeImage !== undefined ? activeImage : img
            })`,
          }}
        ></div>
      </div>
      <div className="right-product">
        <h2>{product.name}</h2>
        <h4>${product.price.formatted}</h4>
        <div className="quantity-input">
          <button className="quantity-minus" onClick={decrementQuantity}>
            -
          </button>
          <input
            className="quantity-number"
            type="number"
            min="1"
            max="10"
            value={quantityVal}
            readOnly
          />
          <button className="quantity-minus" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <button
          className="add-cart"
          onClick={() => handleAddCart(productId, quantityVal)}
        >
          Add to cart
        </button>
        <p className="product-desc">{prodDesc}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
