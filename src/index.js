import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import { createGrid, initializeGrid, convertGridToTiles } from './utils/grid';

const INITIAL_GRID = initializeGrid(createGrid(10, 22));

const tiles = convertGridToTiles(INITIAL_GRID);

ReactDOM.render(<App tiles={ tiles } />, document.getElementById('root'));
registerServiceWorker();
