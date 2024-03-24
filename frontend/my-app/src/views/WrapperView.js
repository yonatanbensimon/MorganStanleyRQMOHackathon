import HomeView from "./HomeView/HomeView";
import React from "react";
import './WrapperView.css';
import GameView from "./GameView/GameView";
import ResultView from "./ResultView/ResultView"
import { useState } from "react";
import Story from './story.json';



function WrapperView() {
  const [currentView, setCurrentView] = useState("game");
  const [weeks, setWeeks] = useState(0);
  const [availableOptions, setAvailableOptions] = useState([]);


  /*
  *   Function called when game starts. Initialize the disease.
  *   Update availableOptions array to add beginning options.
  *   Set `weeks` to zero. Call change view with the appropriate
  *   parameter.
  *
  *   @return {String} - The instructions text.
  */
  function init() {
    setAvailableOptions([Story.NewOptions]);
    setCurrentView("game");
    setWeeks(0);
    return 'placeholder';
  }

  /*
  *  Function called when a user selects an option. Update the
  *  availableOptions array to reflect the new options. Update
  *  the weeks. If choseOption is a winning option, call
  *  results().
  * 
  *  @return {String} - The dialogue of the chosenOption.
  */
  function updateOptions(chosenOption) {
    const gameResult = Story?.chosenOption?.gameresult ?? "defaultResult";
    if (gameResult) {
      return results();
    }
    setAvailableOptions(Story.chosenOption.NewOptions);
    setWeeks(weeks + Story.chosenOption.weeks);
  }

  /*
  *  Function called when the user wins the game. Call changeView
  *  with the appropriate parameter.
  * 
  *  @return {String} - The results of the game
  */
  function results() {
    setCurrentView("result");
    return 'placeholder';
  }
  
  const renderView = () => {
    switch (currentView) {
      case "game":
        return <GameView changeView={setCurrentView} />;
      case "result":
        return <ResultView changeView={setCurrentView} />;
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
  