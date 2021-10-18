import React, { useState, useEffect } from 'react';
import './LoadBar.css';

function LoadBar(props) {
  const { loadNumber, loading } = props;
  return (
    <div className="loadBar-container">
      <div
        className={`loadBar ${!loading ? 'hide' : ''}`}
        style={{ width: `${loadNumber}%` }}
      ></div>
      <h3 className={`loadNumber ${!loading ? 'hide' : ''}`}>
        {loadNumber}/100
      </h3>
    </div>
  );
}

export default LoadBar;
