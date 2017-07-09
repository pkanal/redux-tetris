import { createGrid, initializeGrid, convertGridToTiles, movePiece } from './grid';

describe('grid utils tests', () => {
  describe('create x by y array', () => {
    it('should create an empty two dimensional array', () => {
      const actual = createGrid(2, 3);
      const expected = [
        [{}, {}],
        [{}, {}],
        [{}, {}]
      ];
      expect(actual).toEqual(expected);
    });
  });

  describe('initialize x by y array with pieces', () => {
    const grid = [
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ];
    it('should initialize with i piece', () => {
      const actual = initializeGrid(grid, 'i');
      const expected = [
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe('convert grid to tiles for display', () => {
    const grid = [
      [{ type: 'i'}, {}, {}, {}, {}],
      [{ type: 'i'}, {}, {}, {}, {}],
      [{ type: 'i'}, {}, {}, {}, {}],
      [{ type: 'i'}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ];

    it('should convert a two dimensional array into display tiles with coords', () => {
      const actual = convertGridToTiles(grid);
      const expected = [{
        x: 1,
        y: 1,
        colour: '#81CFE0',
      }, {
        x: 1,
        y: 2,
        colour: '#81CFE0',
      }, {
        x: 1,
        y: 3,
        colour: '#81CFE0',
      }, {
        x: 1,
        y: 4,
        colour: '#81CFE0',
      }];

      expect(actual).toEqual(expected);
    });
  });

  describe('move piece down a tile', () => {
    it('should move a piece down', () => {
      const grid = [
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
      ];
      const actual = movePiece(grid);
      const expected = [
        [{}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{ type: 'i'}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
      ];

      expect(actual).toEqual(expected);
    });
  });
});
