// @flow
import React from 'react';
import { connect } from 'react-redux';

import type { Tile } from '../types';

type Props = {
  tiles: Tile[],
};

const Grid = ({
  tiles,
}: Props) => (
  <div className='tetris-grid'>
    { tiles.map(tile =>
      <div style={{ gridColumn: tile.x, gridRow: tile.y, background: tile.colour}} />
    )}
  </div>
);

const mapStateToProps = state => ({
  tiles: state.tiles
});

export default connect(mapStateToProps)(Grid);
