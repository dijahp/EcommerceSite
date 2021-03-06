import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import ImageCard from '../ImageCard/ImageCard';
import './NewProductList.css';
import axios from 'axios';

function NewProductList(props) {
  const { products } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="NewProductList">
      <div className="newProducts">
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          infinite={true}
        >
          {products.map((product, idx) => {
            const { image, name, price } = product;
            return (
              <ImageCard
                img_url={image.url}
                name={name}
                price={price}
                key={idx}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default NewProductList;
