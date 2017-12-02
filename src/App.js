import React, { Component } from 'react';
import Graphic from "./components/Graphic";
import Title from "./components/Title";
// import friends from "./friends.json";

class App extends Component{

    state = {
        score: 0,
        id : [0,1,2,3,4,5,6,7,8,9,10,11],
        highScore: 0,
        clickedId: [100],
    }

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

    clickImg = (id) => {
        let clickedIds = this.state.clickedId;
        console.log("clicked ids: ", clickedIds);
        console.log("currentClickedIds: ", id);

        for (let value of clickedIds){
            // console.log("value in loop is: ", value);
            if(id === value){
                console.log("reset game");
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
            alert("Congratulation. You have a fantastic memory!!");
            this.resetGame();
        }
        return
    }

    resetGame = () =>{
        this.setState({
            score: 0,
            clickedId: [100]
        })
    }

    
    render(){
        return (
            <div>
                {console.log("rerendered")}
                <Title 
                    score={this.state.score}
                    highScore={this.state.highScore}
                 />
                 
                <Graphic
                    src={`images/img${this.state.id[0]}.jpg`}
                    id={this.state.id[0]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[1]}.jpg`}
                    id={this.state.id[1]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[2]}.jpg`}
                    id={this.state.id[2]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[3]}.jpg`}
                    id={this.state.id[3]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[4]}.jpg`}
                    id={this.state.id[4]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[5]}.jpg`}
                    id={this.state.id[5]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[6]}.jpg`}
                    id={this.state.id[6]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[7]}.jpg`}
                    id={this.state.id[7]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[8]}.jpg`}
                    id={this.state.id[8]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[9]}.jpg`}
                    id={this.state.id[9]}
                    onClick={this.clickImg
                    }
                />
                <Graphic
                    src={`images/img${this.state.id[10]}.jpg`}
                    id={this.state.id[10]}
                    onClick={this.clickImg
                    }
                />
                 <Graphic
                    src={`images/img${this.state.id[11]}.jpg`}
                    id={this.state.id[11]}
                    onClick={this.clickImg
                    }
                />
                {this.shuffle()}
            </div>

            
        )
    }
}

export default App;
