import React, { useState, useEffect } from 'react';
import './HomeView.css'; // Import your CSS file for styling
import heart from '../../assets/heart.png';
import BestButton from '../../components/BestButton'

const HomeView = ({ changeView }) => {
  const [thump, setThump] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setThump(thump => !thump);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
        src={heart}
        alt="Heart"
        className={thump ? 'heart thumping' : 'heart'}
        style={{ width: '250px', paddingTop: '0px', paddingBottom: '30px' }}
        />
        <h2 style={{ fontSize: '30px', marginBottom: '10px', marginTop: '-10px' }}>Diagnosis Game</h2>
        <BestButton onClick={() => changeView("instructions")}>Start Game</BestButton>
    </div>
  );
}

export default HomeView;