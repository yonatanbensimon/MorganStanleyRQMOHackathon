import React from 'react';
import './TextBox.css';

const TextBox = ({ message }) => {
  return (
    <div className="text-box">
      <p>{message}</p>
    </div>
  );
};

export default TextBox;
