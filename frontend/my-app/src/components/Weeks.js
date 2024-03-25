import React from 'react';
import './Weeks.css';

const Weeks = ({ months }) => {
  return (
    <div className="weeks">
      <p>Total weeks: {months}</p>
    </div>
  );
};

export default Weeks;
