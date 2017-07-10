// @flow
import { GAME_STATES } from '../constants';
import type {
  Grid,
  Tiles,
} from '../types';

const action = (type: string, payload: {} = {}) => ({
  type,
  payload,
});

// Action Types
export const START_GAME = 'START_GAME';
export const UPDATE_GRID = 'UPDATE_GRID';
export const UPDATE_TILES = 'UPDATE_TILES';
export const MOVE_CURRENT_PIECE = 'MOVE_CURRENT_PIECE';
export const STOP_CURRENT_PIECE = 'STOP_CURRENT_PIECE';

// Action Creators
export const startGame = () => action(START_GAME, { gameState: GAME_STATES.IN_PROGRESS });
export const updateGrid = (grid: Grid) => action(UPDATE_GRID, { grid });
export const updateTiles = (tiles: Tiles) => action(UPDATE_TILES, { tiles });
export const moveCurrentPiece = () => action(MOVE_CURRENT_PIECE);
export const stopCurrentPiece = () => action(STOP_CURRENT_PIECE);
