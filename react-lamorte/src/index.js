import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { gameStore } from './ctrl/reducer';

import './styles/index.css';

ReactDOM.render(<Provider store={gameStore}><App /></Provider>, document.getElementById('root'));
