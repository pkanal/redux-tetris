// @flow
import R from 'ramda';

import type {
  Cell,
  Row,
  Grid
} from '../types';

const PIECE_TYPES = {
  I: 'i',
}

const PIECE_INIT_COORDS = {
  [PIECE_TYPES.I]: [{
    x: 0,
    y: 0,
  }, {
    x: 0,
    y: 1,
  }, {
    x: 0,
    y: 2,
  }, {
    x: 0,
    y: 3
  }],
  empty: [],
};

const PIECE_COLOURS = {
  [PIECE_TYPES.I]: '#81CFE0',
  default: 'red',
};

export const createGrid = (x: number, y: number) => (
  [...Array(y)].map(row => [...Array(x)].map(value => ({})))
);

export const initializeGrid = (grid: Grid, type: string = 'empty') =>
  grid.map((y: Row, yIndex: number) =>
  y.map((x: Cell, xIndex: number) => {
  const shouldConvertTile = PIECE_INIT_COORDS[type].filter(
    coords => coords.x === xIndex && coords.y === yIndex
  ).length > 0;

  return shouldConvertTile ? { type } : x;
}));

export const convertGridToTiles = (grid: Grid) =>
  grid.reduce((acc, y: Row, yIndex: number) => {
  return [...acc, ...y.filter((x: Cell, xIndex: number) => !R.isEmpty(x)).map((x: Cell, xIndex: number) => ({
    x: xIndex + 1,
    y: yIndex + 1,
    colour: PIECE_COLOURS[x.type ? x.type : 'default'],
  }))];
}, []);
