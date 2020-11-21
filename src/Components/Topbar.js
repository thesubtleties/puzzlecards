import React from 'react';


function Topbar(props) {

  return (
    <div className="Topbar">
    <span>Memory Card Game</span>
    <div className="scores">Score:{props.currentScore}</div>
    <div className="scores">High Score:{props.highScore}</div>

    </div>
  );
}

export default Topbar;
