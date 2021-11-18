import { useState } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowSize = () => {
  const getWindowSize = () => ({ width: window.innerWidth, height: window.innerHeight });
  const [windowSize, setWindowSize] = useState(getWindowSize);

  useEventListener('resize', () => {
    setWindowSize(getWindowSize());
  });
  return windowSize;
};
