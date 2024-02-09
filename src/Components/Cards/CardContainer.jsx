import React from "react";
import "./Card.css";
import Card from "./Card"; 

const CardContainer = ({ details }) => { 
  return (
    <div className="card_mainContainer">
      <div className="card_flexContainer">
        {details.map((person, index) => (
          <Card key={index} person={person} /> 
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
