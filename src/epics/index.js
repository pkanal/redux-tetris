// @flow
import { combineEpics } from 'redux-observable';
import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';

import { START_GAME, UPDATE_GRID, MOVE_CURRENT_PIECE, updateGrid, updateTiles, moveCurrentPiece } from '../actions';
import { initializeGrid, PIECE_TYPES, convertGridToTiles, movePiece } from '../utils/grid';

const startGameEpic = ($action, store) =>
  $action.ofType(START_GAME)
  .flatMap(() => {
    const grid = store.getState().grid;

    return concat$(
      of$(updateGrid(initializeGrid(grid, PIECE_TYPES.I))),
      of$(moveCurrentPiece()),
    )
  })

const updateGridEpic = $action =>
  $action.ofType(UPDATE_GRID)
  .map(action => {
    return updateTiles(convertGridToTiles(action.payload.grid));
  });

const moveCurrentPieceEpic = ($action, store) =>
  $action.ofType(MOVE_CURRENT_PIECE)
  .delay(1000)
  .flatMap(() => {
    const updatedGrid = movePiece(store.getState().grid);
    return concat$(
      of$(updateGrid(updatedGrid)),
      of$(moveCurrentPiece()),
    )
  });


export default combineEpics(
  startGameEpic,
  updateGridEpic,
  moveCurrentPieceEpic,
);
