import React from "react";

import Card from "./Card";

import "../styles/PlayArea.css";

const PlayArea = (props) => {
  const { deck } = props;
  const renderTalon = () => {
    if (deck && deck.length) {
      const talon = deck[0];
      return <Card {...talon} />;
    }
    return null;
  };
  return (
    <div className="PlayArea">
      <div className="Talon">{renderTalon()}</div>
    </div>
  );
};

export default PlayArea;
