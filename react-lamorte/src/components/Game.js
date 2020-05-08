import React from "react";
import { connect } from "react-redux";

import PlayArea from "./PlayArea";
import Player from "./Player";

import "../styles/Game.css";

const Game = (props) => {
  const renderPlayers = () =>
    props.state.players.map((player) => (
      <Player {...player} debug={props.debug} />
    ));
  const renderPlayArea = () => <PlayArea deck={props.deck} />;
  return (
    <div className="Game">
      {renderPlayArea()}
      {renderPlayers()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(Game);
