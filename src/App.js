import React, { Component } from 'react';
import Graphic from "./components/Graphic";
// import friends from "./friends.json";

class App extends Component{

    state={
        score: 0,
        id : [0,1,2,3,4,5,6,7,8,9,10,11]
    }

    shuffle(){
        console.log(this.state.id);
    }
    shuffle();
    
    render(){
        return (
            <div>
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[0]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[1]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[2]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[3]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[4]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[5]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[6]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[7]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[8]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[9]}
                />
                <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[10]}
                />
                 <Graphic
                    src="images/img1.jpg"
                    id={this.state.id[11]}
                />
            </div>

            
        )
    }
}

export default App;
