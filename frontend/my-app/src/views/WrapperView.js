import HomeView from "./HomeView/HomeView";
import React from "react";
import './WrapperView.css';
import GameView from "./GameView/GameView";
import ResultView from "./ResultView/ResultView"
import { useState } from "react";
import Story from './story.json';
import InstructionsView from "./InstructionsView/InstructionsView";

function WrapperView() {
  const [currentView, setCurrentView] = useState("home");
  const [time, setTime] = useState(0)

  const renderView = () => {
    switch (true) {
      case currentView === "game":
        return <GameView changeView={setCurrentView} setTime={setTime} />;
      case currentView === "result":
        return <ResultView changeView={setCurrentView} weeks={time} />;
      case currentView === "instructions":
        return <InstructionsView changeView={setCurrentView} />;
      default:
        return <HomeView changeView={setCurrentView} />;
    }
  };
  

    return (
      <div className="home-container">
      <header>
        <div className="header-left">
          <button onClick={() => setCurrentView("home")}>RQMO Home</button>
        </div>
        <h1 className="header-title">Health Game</h1>
        <div className="header-right">
          <button onClick={() => setCurrentView("game")}>Start Game</button>
        </div>
      </header>
      
      <div className="content">

      <div className="container">
        <div className="rectangle">
          {/* The different views inside the rectangle go here, we start with HomeView*/}
          {renderView()}
        </div>
      </div>

      </div>
      <footer>Footer things</footer>
    </div>
    );
  }
  
  export default WrapperView;
  