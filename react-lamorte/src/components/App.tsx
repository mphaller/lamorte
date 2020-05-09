import React from "react";
import { connect } from "react-redux";

import Game from "./Game";
import Title from "./Title";

import GameState from "../gameObj/GameState";

import "../styles/App.css";

const App = (props: AppProps) => {
  return (
    <div className="App">
      {props.state.gameOver && <Title />}
      {!props.state.gameOver && <Game debug={props.debug} />}
      {props.debug && (
        <div className="Debug">{JSON.stringify(props.state)}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: GameState) => {
  return { state: state };
};

interface AppProps {
  debug: boolean,
  state: GameState,
}

export default connect(
  mapStateToProps
)(App);
