import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { gameStore } from './ctrl/reducer';

import './styles/index.css';

const debug = true;

ReactDOM.render(<Provider store={gameStore}><App debug={debug} /></Provider>, document.getElementById('LaMorte'));
