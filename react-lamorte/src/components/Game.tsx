import React from "react";
import { connect } from "react-redux";

import PlayAreaComponent from "./PlayArea";
import PlayerComponent from "./Player";

import GameState from "../gameObj/GameState";
import Player from "../gameObj/Player";

import "../styles/Game.css";

const Game = (props: GameProps) => {
  return (
    <div className="Game">
      <PlayAreaComponent deck={props.state.deck} />
      {props.state.players.map((player: Player) => (
      <PlayerComponent {...player} debug={props.debug} />
    ))}
    </div>
  );
};

const mapStateToProps = (state: GameState) => {
  return { state: state };
};

interface GameProps {
  state: GameState;
  debug: boolean;
}

export default connect(mapStateToProps)(Game);
