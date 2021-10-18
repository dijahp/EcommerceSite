import React from 'react';
import Navigation from '../Navigation/Navigation';
import './ComingSoon.css';
import headerImg from '../Assets/coming-soon-cursive-heart-sticker-sticker-option4-3_600x.png';

function ComingSoon() {
  return (
    <div className="comingSoon-container">
      <img src={headerImg} className="comeSoonImg" />
    </div>
  );
}

export default ComingSoon;
