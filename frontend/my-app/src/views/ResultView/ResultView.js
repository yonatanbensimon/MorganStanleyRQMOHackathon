import React from 'react';
import './ResultView.css'; // Import your CSS file for styling
import BestButton from '../../components/BestButton';
import Confetti from 'react-confetti';

const ResultView = ({ success = true, weeks = 40 }) => {
  return (
    <div className="result-container">
      <div className="content">
        {success && (
          <div className="confetti-container">
            <Confetti width={800} height={600} numberOfPieces={85} opacity={0.7}/>
          </div>
        )}
        <h2 style={{ color: success ? '#FFA500' : '#8B0000', fontSize: '50px', marginBottom: '-5px', marginTop: '-10px'}}>{success ? 'Congratulations!' : 'Oh No!'}</h2>
        <h2 style={{ color: success ? '#FFA500' : '#8B0000', fontSize: '25px', marginBottom: '25px' }}>{success ? 'You found diagnosis!' : 'Wrong Diagnosis!'}</h2>
        <div className="diagnosistime">Your diagnosis took {weeks} weeks</div>
      
        <div className="button-container">
          <BestButton>Restart Game</BestButton>
          <BestButton>Learn More</BestButton>
        </div>
      </div>
    </div>
  );
};

export default ResultView;