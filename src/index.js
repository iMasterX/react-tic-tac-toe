import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Game from './game.js';
import './styles/style.css';

ReactDOM.render(
    <Game />,
  document.getElementById('root')
);

serviceWorker.unregister();
