import React from 'react';
import { choice, initialColors } from '../helpers';
import useColor from '../hooks/useColor';

function Box() {
  const [color, setColor] = useColor(initialColors);

  const handleClick = () => {
    let newColor;
    do {
      newColor = choice(initialColors);
    } while (newColor === color);
    setColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      className='Box'
      style={{ backgroundColor: color }}
    />
  );
}
export default Box;
