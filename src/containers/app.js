import React from 'react';
import './app.css';

const App = ({
  tiles,
}) => {
  return (
    <div className='container'>
      <div className='tetris-grid'>
        {tiles.map(tile => <div style={{ gridColumn: tile.x, gridRow: tile.y, background: tile.colour}}></div>)}
      </div>
    </div>
  );
}

export default App;
