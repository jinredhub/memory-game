import React from "react";
import "./Title.css";

const Title = props => {

  return (
  	<div>
	    <div className="nav">
	    	<div id="score">Score: {props.score} | High Score: {props.highScore}</div>
	    </div>
    <div id="title-container">
    	<br />
    	<div id="title-content">
    		<h1>Memory Game</h1>
        <p>Click on an color to earn points, but don't click on any more than once!</p>
        <p>Can you beat the game!?</p>
    	</div>
    </div>
    </div>
  )
};

export default Title;
