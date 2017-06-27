import { createGrid, initializeGrid, convertGridToTiles } from './grid';

describe('grid utils tests', () => {
  describe('create x by y array', () => {
    it('should create an empty two dimensional array', () => {
      const actual = createGrid(2, 3);
      const expected = [
        [null, null],
        [null, null],
        [null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });

  describe('initialize x by y array with pieces', () => {
    const grid = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ];
    it('should initialize with i piece', () => {
      const actual = initializeGrid(grid);
      const expected = [
        [{ type: 'i'}, null, null, null, null],
        [{ type: 'i'}, null, null, null, null],
        [{ type: 'i'}, null, null, null, null],
        [{ type: 'i'}, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe('convert grid to tiles for display', () => {
    const grid = [
      [{ type: 'i'}, null, null, null, null],
      [{ type: 'i'}, null, null, null, null],
      [{ type: 'i'}, null, null, null, null],
      [{ type: 'i'}, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ];

    it('should convert a two dimensional array into display tiles with coords', () => {
      const actual = convertGridToTiles(grid);
      const expected = [{
        x: 0,
        y: 0,
        colour: '#81CFE0',
      }, {
        x: 0,
        y: 1,
        colour: '#81CFE0',
      }, {
        x: 0,
        y: 2,
        colour: '#81CFE0',
      }, {
        x: 0,
        y: 3,
        colour: '#81CFE0',
      }];

      expect(actual).toEqual(expected);
    });
  });
});
