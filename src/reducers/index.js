import { combineReducers } from 'redux'
import { createGrid, initializeGrid, convertGridToTiles } from '../utils/grid';

const INITIAL_GRID = initializeGrid(createGrid(10, 22));

// const tiles = convertGridToTiles(INITIAL_GRID);

const INITIAL_STATE = {
  tiles: convertGridToTiles(INITIAL_GRID),
};

const tiles = (state = INITIAL_STATE.tiles, action) => state;

export default combineReducers({
  tiles,
});
