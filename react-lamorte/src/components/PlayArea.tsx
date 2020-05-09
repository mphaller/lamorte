import React from "react";

import CardComponent from "./Card";

import Deck from "../gameObj/Deck";

import "../styles/PlayArea.css";

const PlayArea = (props: PlayAreaProps) => {
  const { deck } = props;
  const renderTalon = () => {
    if (deck && deck.length) {
      const talon = deck[0];
      return <CardComponent {...talon} />;
    }
    return null;
  };
  return (
    <div className="PlayArea">
      <div className="Talon">{renderTalon()}</div>
    </div>
  );
};

interface PlayAreaProps {
  deck: Deck;
}

export { PlayArea as default };
