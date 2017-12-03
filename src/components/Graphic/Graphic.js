import React from "react";
import "./Graphic.css";

const Graphic = props => {

  return (

      <img className="img" onClick={()=>props.onClick(props.id)} alt="img" src={props.src} id={props.id}/>
  )
};

export default Graphic;
