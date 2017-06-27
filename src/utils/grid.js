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
};

const PIECE_COLOURS = {
  [PIECE_TYPES.I]: '#81CFE0',
};

export const createGrid = (x, y) => (
  [...Array(y)].map(row => [...Array(x)].map(value => null))
);

export const initializeGrid = (grid, type = PIECE_TYPES.I) =>
  grid.map((y, yIndex) =>
  y.map((x, xIndex) => {
  const shouldConvertTile = PIECE_INIT_COORDS[type].filter(
    coords => coords.x === xIndex && coords.y === yIndex
  ).length > 0;

  return shouldConvertTile ? { type } : x;
}));

export const convertGridToTiles = grid => grid.reduce((acc, y, yIndex) => {
  return [...acc, ...y.filter((x, xIndex) => x).map((x, xIndex) => ({
    x: xIndex + 1,
    y: yIndex + 1,
    colour: PIECE_COLOURS[x.type],
  }))];
}, []);
