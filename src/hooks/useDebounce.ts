import { useEffect } from 'react';
import { useTimeout } from './useTimeout';
import { noop } from '../utils/utils';

export const useDebounce = (callback = noop, delay: number, dependencies: unknown[]) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, [clear]);
};
