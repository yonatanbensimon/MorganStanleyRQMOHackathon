// ImageButton.js
import React from 'react';
import './ButtonChoice.css'; // Importing the styles

const ButtonChoice = ({ src, text, imageSize = "100px", onClick }) => {
  return (
    <button className="image-button" onClick={onClick}>
     
        <img src={src} style={{ width: imageSize }}/>
        <span className="button-text">{text}</span>
     
    </button>
  );
};

export default ButtonChoice;
