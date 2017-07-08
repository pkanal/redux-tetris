// @flow

import type { Grid } from './types';
import {
  createGrid,
  initializeGrid,
} from './utils/grid';

export const INITIAL_GRID: Grid = initializeGrid(createGrid(10, 22));

export const GAME_STATES = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  PAUSED: 'paused',
  OVER: 'over',
};
