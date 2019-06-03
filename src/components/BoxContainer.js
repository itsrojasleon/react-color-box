import React from 'react';
import Box from './Box';

function BoxContainer() {
  const boxes = Array.from({ length: 18 }).map(() => <Box />);
  return <div className='BoxContainer'>{boxes}</div>;
}
export default BoxContainer;
