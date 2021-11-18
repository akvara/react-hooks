import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <div>
        {width} x {height}
      </div>
    </div>
  );
};

export default WindowSizeComponent;
