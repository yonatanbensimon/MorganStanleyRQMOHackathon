import HomeView from "./HomeView/HomeView";
import React from "react";
import './WrapperView.css';
import GameView from "./GameView/GameView";
import InstructionsView from "./InstructionsView/InstructionsView";

function WrapperView() {
    return (

      <div className="home-container">
      <header>
        <div className="header-left">
          <button>RQMO Home</button>
        </div>
        <h1 className="header-title">Health Game</h1>
        <div className="header-right">
        </div>
      </header>
      <div className="content">

      <div className="container">
        <div className="rectangle">
          {/* The different views inside the rectangle go here, we start with HomeView*/}
          <InstructionsView/>
        </div>
      </div>


      </div>
      <footer>Footer things</footer>
    </div>


      
    );
  }
  
  export default WrapperView;
  