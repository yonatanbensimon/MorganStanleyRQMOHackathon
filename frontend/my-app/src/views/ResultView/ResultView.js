import React from 'react';
import './ResultView.css';
import BestButton from '../../components/BestButton';
import Confetti from 'react-confetti';

const ResultView = ({ score = 100, success = true }) => {
  return (
    <div className="result-container">
      <div className="content">
        {success && (
          <div className="confetti-container">
            <Confetti width={800} height={600} numberOfPieces={85} opacity={0.7}/>
          </div>
        )}
        <h2 style={{ color: success ? '#FFA500' : '#8B0000', fontSize: '50px' }}>{success ? 'Congratulations!' : 'Oh No!'}</h2>
        <div className="score">Your Score: {score}</div>
        <div className="button-container">
          <BestButton>Restart Game</BestButton>
          <BestButton>Learn More</BestButton>
        </div>
      </div>
    </div>
  );
};

export default ResultView;