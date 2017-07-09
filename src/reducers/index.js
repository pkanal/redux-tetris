// @flow
import { combineReducers } from 'redux';

import { convertGridToTiles } from '../utils/grid';
import {
  INITIAL_GRID,
  GAME_STATES,
} from '../constants';
import { START_GAME, UPDATE_GRID, UPDATE_TILES } from '../actions';

import type {
  GameState,
  Action,
  Grid,
  Tiles,
} from '../types';



const INITIAL_STATE = {
  tiles: convertGridToTiles(INITIAL_GRID),
  gameState: GAME_STATES.NOT_STARTED,
};

const grid = (state: Grid = INITIAL_GRID, action: Action) => {
  if (action.type === UPDATE_GRID) {
    return action.payload.grid;
  }

  return state;
};

const tiles = (state: Tiles = INITIAL_STATE.tiles, action: Action) => {
  if (action.type === UPDATE_TILES) {
    return action.payload.tiles;
  }

  return state;
};

const gameState = (state: GameState = INITIAL_STATE.gameState, action: Action) => {
  switch(action.type) {
    case START_GAME:
      return action.payload.gameState;
    default:
      return state;
  }
};

export default combineReducers({
  tiles,
  gameState,
  grid,
});
