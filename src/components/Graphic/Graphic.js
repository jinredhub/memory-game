import React from "react";
import "./Graphic.css";

const Graphic = props => {

  return (

    <div className="imgDiv">
      <img onClick={props.onClick} alt="img" src={props.src} id={props.id}/>
    </div>
  )
};

export default Graphic;
