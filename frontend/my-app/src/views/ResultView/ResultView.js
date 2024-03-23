import React from 'react';
import './ResultView.css'; // Import your CSS file for styling
import BestButton from '../../components/BestButton';

const ResultView = ({ score = 100 }) => {
  return (
    <div className="result-container">
      <header>
        <div className="header-left">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
        <h1 className="header-title">My Awesome Website</h1>
        <div className="header-right">
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
      </header>
      <div className="content">
        <h2>Your Score</h2>
        <div className="score">{score}</div>
        <BestButton>Restart Game</BestButton>
        <BestButton>Learn More</BestButton>
      </div>
      <footer>Footer things</footer>
    </div>
  );
}

export default ResultView;