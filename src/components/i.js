import React from 'react';

const I = ({
  rotation = 0,
  x,
  y
}) => {
  const placement = {
    0: {
      column: 1,
      row: 4,
    },
    90: {
      column: 4,
      row: 1,
    },
    180: {
      column: 1,
      row: 4,
    },
    270: {
      column: 4,
      row: 1,
    },
  };

  const style = {
    gridColumn: `${x} / span ${placement[rotation].column}`,
    gridRow: `${y} / span ${placement[rotation].row}`,
    background: '#81CFE0',
  }

  return <div style={ style }></div>;
}

export default I;
