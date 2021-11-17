import { useRef } from 'react';

export const usePrevious = (value: unknown) => {
  const currentRef = useRef(value);
  const previousRef = useRef();

  if (currentRef !== value) {
    // @ts-ignore
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
};
