import React from 'react';
import './HomeView.css'; // Import your CSS file for styling
import BestButton from '../../components/BestButton'

const HomeView = ({ changeView }) => {
  return (
    <div>
        <BestButton>Start Game</BestButton>
      </div>
  );
}

export default HomeView;