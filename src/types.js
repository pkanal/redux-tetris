// @flow

export type Cell = {
  type?: string,
}

export type Row = Cell[];

export type Grid = Row[];

export type Tile = {
  x: number,
  y: number,
  colour: string,
};

export type Action = {
  type: string,
  payload: {},
}
