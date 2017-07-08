// @flow

import { GAME_STATES } from '../constants';

const action = (type: string, payload: {} = {}) => ({
  type,
  payload,
});

// Action Types
export const START_GAME = 'START_GAME';

// Action Creators
export const startGame = () => action(START_GAME, { gameState: GAME_STATES.IN_PROGRESS });
