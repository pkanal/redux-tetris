// @flow
import React from 'react';
import { connect } from 'react-redux';

import './app.css';

type Tile = {
  x: number,
  y: number,
  colour: string,
};

type Props = {
  tiles: Tile[],
};

const App = ({
  tiles,
}: Props) => {
  return (
    <div className='container'>
      <div className='tetris-grid'>
        {tiles.map(tile => <div style={{ gridColumn: tile.x, gridRow: tile.y, background: tile.colour}}></div>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  tiles: state.tiles
});

export default connect(mapStateToProps)(App);
