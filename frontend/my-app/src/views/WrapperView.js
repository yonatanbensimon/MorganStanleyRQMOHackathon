import HomeView from "./HomeView/HomeView";
import React from "react";
import './WrapperView.css';
import GameView from "./GameView/GameView";

function WrapperView() {
    return (

      <div className="home-container">
      <header>
        <div className="header-left">
          <button>RQMO Home</button>
        </div>
        <h1 className="header-title">Health Game</h1>
        <div className="header-right">
          <button>Start Game</button>
        </div>
      </header>
      <div className="content">

      <div className="container">
        <div className="rectangle">
          {/* The different views inside the rectangle go here, we start with HomeView*/}
          <GameView/>
        </div>
      </div>


      </div>
      <footer>Footer things</footer>
    </div>


      
    );
  }
  
  export default WrapperView;
  