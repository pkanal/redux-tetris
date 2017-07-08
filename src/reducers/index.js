// @flow
import { combineReducers } from 'redux';

import { convertGridToTiles } from '../utils/grid';
import type {
  Action,
} from '../types';
import {
  INITIAL_GRID,
  GAME_STATES,
} from '../constants';
import { START_GAME } from '../actions';


type GameState =
  | 'not-started'
  | 'in-progress'
  | 'paused'
  | 'over'

const INITIAL_STATE = {
  tiles: convertGridToTiles(INITIAL_GRID),
  gameState: GAME_STATES.NOT_STARTED,
};

const tiles = (state = INITIAL_STATE.tiles, action: Action) => state;

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
});
