import React from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';

const App = (props) => {
  return (
    <div className="App">
      <h1>La Morte</h1>
      <div className="debug">
        {JSON.stringify(props.state)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { state: state };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
