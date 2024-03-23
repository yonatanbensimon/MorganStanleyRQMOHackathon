// ImageButton.js
import React from 'react';
import './ButtonChoice.css'; // Importing the styles

const ButtonChoice = ({ src, onClick }) => {
  return (
    <button className="image-button" onClick={onClick}>
      <img src={src} />
    </button>
  );
};

export default ButtonChoice;
