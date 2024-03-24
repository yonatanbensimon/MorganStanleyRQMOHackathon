// ImageButton.js
import React from 'react';
import './ButtonChoice.css'; // Importing the styles

const ButtonChoice = ({ src, onClick, children }) => {
  return (
    <button className="image-button" onClick={onClick}>
      <img src={src} />
      {children}
    </button>
  );
};

export default ButtonChoice;
