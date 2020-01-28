import React from 'react';
import { connect } from 'react-redux';

import Player from './Player';

import '../styles/Game.css';

const Game = (props) => {
  const renderPlayers = () => props.state.players.map(player => (
      <Player { ...player } debug={props.debug} />
  ));
  return (
    <div className="Game">
      {renderPlayers()}
    </div>
  );
}

const mapStateToProps = state => {
  return { state: state };
}

export default connect(mapStateToProps)(Game);
