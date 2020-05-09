import React from "react";

import Card from "./Card";

import "../styles/Player.css";

const Player = (props) => {
  const renderHand = () =>
    props.hand.map((card) => (
      <Card {...card} faceUp={card.faceUp || props.debug} />
    ));

  return (
    <div className="Player">
      <div className="Name">{props.name}</div>
      <div className="Hand">{renderHand()}</div>
    </div>
  );
};

export default Player;
