import { useState } from 'react';
import { choice } from '../helpers';

function useColor(initialColors) {
  const [color, setColor] = useState(choice(initialColors));

  return [color, setColor];
}
export default useColor;
