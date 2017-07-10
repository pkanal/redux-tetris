import {
  createGrid,
  initializeGrid,
  convertGridToTiles,
  movePiece,
  shouldPieceBecomeInactive,
} from './grid';

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
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe('convert grid to tiles for display', () => {
    const grid = [
      [{ type: 'i', isActive: true }, {}, {}, {}, {}],
      [{ type: 'i', isActive: true }, {}, {}, {}, {}],
      [{ type: 'i', isActive: true }, {}, {}, {}, {}],
      [{ type: 'i', isActive: true }, {}, {}, {}, {}],
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
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
      ];
      const actual = movePiece(grid);
      const expected = [
        [{}, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe('check if current piece should become inactive', () => {
    it('should detect if a piece has hit the bottom', () => {
      const grid = [
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, { type: 'i', isActive: true }, {}, {}, {}],
      ];
      const actual = shouldPieceBecomeInactive(grid);

      expect(actual).toEqual(true);
    });

    it('should return false if the piece is not about to hit anything', () => {
      const grid = [
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{ type: 'i', isActive: true }, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
      ];
      const actual = shouldPieceBecomeInactive(grid);

      expect(actual).toEqual(false);
    })
  });
});
