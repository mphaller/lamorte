import React from "react";
import { connect } from "react-redux";

import Game from "./Game";
import Title from "./Title";

import "../styles/App.css";

const App = (props) => {
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

const mapStateToProps = (state) => {
  return { state: state };
};

// const mapDispatchToProps = dispatch => {
//   return {};
// }

export default connect(
  mapStateToProps
  //  mapDispatchToProps
)(App);
