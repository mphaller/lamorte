import React from "react";
import classNames from "classnames";

import "../styles/Card.css";

const Card = (props: CardProps) => {
  return (
    <div className={classNames(["Card", props.faceUp ? "up" : "down"])}>
      {props.faceUp && (
        <div className={classNames(["Values", "Suit" + props.suit])}>
          <div>{props.rank}</div>
          <div>{props.suit}</div>
        </div>
      )}
    </div>
  );
};

interface CardProps {
  faceUp: boolean,
  rank: string,
  suit: string,
}

export { Card as default };
