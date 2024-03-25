import React from 'react';
import './BestButton.css';
const BestButton = ({ children, onClick }) => {
  return (
    <button className="BestButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default BestButton;
