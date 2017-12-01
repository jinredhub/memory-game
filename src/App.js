import React, { Component } from 'react';
import Graphic from "./components/Graphic";
// import friends from "./friends.json";

class App extends Component{

    state = {
        score: 0,
        id : [0,1,2,3,4,5,6,7,8,9,10,11]
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

    clickImg = () => {
        this.setState({
            score: this.state.score + 1
        });
        // this.shuffle();
        return console.log(this.state.score)
    }

    
    render(){
        return (
            <div>
                {console.log("rerendered")}
                <p>{this.state.score
                }</p>
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
