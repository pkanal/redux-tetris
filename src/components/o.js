import React from 'react';

const O = ({
  rotation,
  x,
  y
}) => {

  const style = {
    gridColumn: `${x} / span 2`,
    gridRow: `${y} / span 2`,
    background: '#F7CA18',
  };

  return <div style={ style }></div>;
}

export default O;
