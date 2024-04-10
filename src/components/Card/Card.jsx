import React from "react";
import "./Card.css";

const Card = ({heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <span></span>
      <span></span>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
