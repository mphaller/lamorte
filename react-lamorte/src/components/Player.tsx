import React from "react";

import CardComponent from "./Card";

import Card from "../gameObj/Card";

import "../styles/Player.css";

const Player = (props: PlayerProps) => {
  return (
    <div className="Player">
      <div className="Name">{props.name}</div>
      <div className="Hand">{props.hand.map((card: Card) => (
      <CardComponent {...card} faceUp={card.faceUp || props.debug} />
    ))}</div>
    </div>
  );
};

interface PlayerProps {
  hand: Card[];
  debug: boolean;
  name: string;
}

export default Player;
