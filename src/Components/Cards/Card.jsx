// Card.jsx
import React from "react";
import "./Cards.css";

const Card = ({ person }) => {
  return (
    <div className="cards_mainContainer">
      <div className="cardBody">
        <div className="cardImgdiv">
          <img
            src={person.image || "https://example.com/default-image.jpg"} 
            alt=""
            className="cardimage"
          />
        </div>
        <p className="c_head">{person.name}</p>
        <p className="c_subhead">
          <span>{person.title}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
