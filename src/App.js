import React, { Component } from 'react';
import Graphic from "./components/Graphic";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component{

    state = {
        score: 0,
        id : [0,1,2,3,4,5,6,7,8,9,10,11],
        highScore: 0,
        clickedId: [100],
    }

    // shuffle the imgs everytime render page
    shuffle = () => {
        var array = this.state.id;
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        console.log(`array value is: ${array}`);
    }

    // when img is clicked: 
    // 1. add score. 2. reset game if clicked same img. 3.win if clicked all imgs
    clickImg = (id) => {
        this.removeShake();
        let clickedIds = this.state.clickedId;
        console.log("clicked ids: ", clickedIds);
        console.log("currentClickedIds: ", id);

        for (let value of clickedIds){
            // console.log("value in loop is: ", value);
            if(id === value){
                console.log("reset game");
                this.shake();
                this.resetGame();
                return;
            }
        }
        console.log("score point");
        this.setState({
            score: this.state.score + 1
        });
        clickedIds.push(id);
        console.log("new clickedIds: " + clickedIds);
        if (this.state.score >= this.state.highScore){
            // this.state.highScore = this.state.score;
            console.log("new high score");
            this.setState({
                highScore: this.state.score + 1
            });
        }
        if(this.state.score === 11){
            alert("Congratulation. WOW!! You have a fantastic memory!!");
            this.resetGame();
        }
        return
    }

    // resetting game
    resetGame = () =>{
        this.setState({
            score: 0,
            clickedId: [100]
        })
    }

    // remove shake animation
    removeShake = () =>{
        let shakeDiv = document.querySelector(".mainContent");
        shakeDiv.classList.remove("shake");
    }

    // add shake animation
    shake = () =>{
                let shakeDiv = document.querySelector(".mainContent");
                shakeDiv.classList.add("shake");
    }

    
    render(){
        return (

            <div>
                {console.log("rerendered")}
                <Title 
                    score={this.state.score}
                    highScore={this.state.highScore}
                 >
                    <h1>Memory Game</h1>
                    <p>Click on a color to earn points, but don't click on any more than once!</p>
                    <p>Can you beat the game!?</p>
                </Title>


                <Wrapper>
                    <div className="mainContainer">
                        <div className="mainContent">
                             {this.state.id.map((id) => (
                                <Graphic
                                    src={`images/img${id}.jpg`}
                                    id={id}
                                    onClick={this.clickImg}
                                    key={id}
                                />
                            ))}
                        </div>
                     </div>
                </Wrapper>
                {this.shuffle()}
            </div>
            
        )
    }
}

export default App;
