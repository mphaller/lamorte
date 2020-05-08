import React from "react";
import { connect } from "react-redux";

import { newGame } from "../ctrl/actions";

import "../styles/Title.css";

const Title = (props) => {
  return (
    <div className="Title">
      <h1>La Morte</h1>
      <div className="Menu">
        <button type="button" onClick={props.handleGameStart}>
          Start
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { gameOver: state.gameOver };
};

const mapDispatchToProps = (dispatch) => {
  return { handleGameStart: () => newGame(dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
